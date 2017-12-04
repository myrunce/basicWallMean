//this is the main controller that handles all the logic for the routes
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Reply = mongoose.model('Reply');

module.exports = {
    getAllPosts: function(req, res) {
        Post.find({}).sort('-createdAt')
        .populate('replies')
        .exec(function(err, posts) {
            if (err) {
                console.log('ERROR FINDING POSTS');
            }
            else {
                return res.json(posts);
            }
        })
    },
    addPost: function(req, res) {
        var post = new Post({
            name: req.body.name,
            text: req.body.text,
            likes: 0
        })
        post.save(function(err) {
            if (err) {
                console.log(err);
            }
            else {
                return res.json(post)
            }
        })
    },
    findOnePost: function(req, res) {
        Post.findOne({_id: req.params.id})
        .populate('replies')
        .exec(function(err, post) {
            if (err) {
                console.log('ERROR FINDING POST');
            }
            else {
                return res.json(post);
            }
        })
    },
    findReply: function(req,res) {
        Reply.find({_id: req.params.id}, function(err, reply) {
            if (err) {
                console.log('COULD NOT FIND reply');
            }
            else {
                console.log('FOUND reply')
                return res.json(reply)
            }
        })
    },
    addReply: function(req, res) {
        console.log('in reply')
        Post.findOne({_id:req.params.id}, function(err, post) {
            var reply = new Reply({
                name: req.body.name,
                text: req.body.text,
                likes: 0,
                _post: post._id
            })
            reply.save(function(err) {
                post.replies.push(reply);
                post.save(function(err) {
                    if(err) {
                        console.log('ERROR SAVING REPLY TO POST');
                    }
                    else {
                        console.log('SAVING REPLY');
                        Post.find({}).sort('-createdAt')
                        .populate('replies')
                        .exec(function(err, posts) {
                            if (err) {
                                console.log('ERROR FINDING POSTS');
                            }
                            else {
                                console.log('finished');
                                return res.json(posts);
                            }
                        })
                    }
                })
            })
        })
    },
    updatePost: (function(req, res) {
        Post.update({_id: req.params.id}, {likes: req.body.likes}, function(err, values) {
            if (!err) {
                Post.findOne({_id: req.params.id}).exec(function(err, post) {
                    return res.json(post);
                })
            } else {
                console.log('DID NOT UPDATE POST');
            }
        });
    }),
    updateReply: (function(req, res) {
        Reply.update({_id: req.params.id}, {likes: req.body.likes}, function(err, values) {
            if (!err) {
                Reply.findOne({_id: req.params.id}).exec(function(err, reply) {
                    return res.json(reply);
                })
            } else {
                console.log('DID NOT UPDATE REPLY');
            }
        });
    }),
    deletePost: function(req, res){
        Post.remove({_id: req.params.id}, function(err) {
            if (err) {
                console.log(err);
            }
            else {
                Post.find({}).sort('-createdAt')
                .populate('replies')
                .exec(function(err, posts) {
                    if (err) {
                        console.log('ERROR FINDING POSTS');
                    }
                    else {
                        return res.json(posts);
                    }
                })
            }
        })
    },
    deleteReply: function(req, res){
        Reply.remove({_id: req.params.id}, function(err) {
            if (err) {
                console.log(err);
            }
            else {
                Post.find({}).sort('-createdAt')
                .populate('replies')
                .exec(function(err, posts) {
                    if (err) {
                        console.log('ERROR FINDING POSTS');
                    }
                    else {
                        return res.json(posts);
                    }
                })
            }
        })
    }
}