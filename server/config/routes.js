//These are all the paths used.

var controller = require('../controllers/controller.js');
const path = require('path'); 
module.exports = function(app) {
    app.post('/api/posts', controller.addPost); //Adding a post
    app.get('/api/posts', controller.getAllPosts); //getting all posts 
    app.get('/api/posts/:id', controller.findOnePost); //Finding One Post
    app.put('/api/posts/:id', controller.updatePost); //updating a Post (for likes)
    app.delete('/api/posts/:id', controller.deletePost); //deleting a Post
    app.put('/api/posts/add/:id', controller.addReply); //Adding a Reply to a post
    app.put('/api/replies/:id', controller.updateReply); //Updating a Reply (for likes)
    app.get('/api/replies/:id', controller.findReply); //finding one Reply
    app.delete('/api/replies/:id', controller.deleteReply); //deleting a Reply
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html")) //to allow angular routes to work
    });
}