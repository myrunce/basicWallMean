//This is the post model. When a user creates a new post, users can comment on it
var mongoose = require('mongoose'); //MongoDb will be our database
var Schema = mongoose.Schema; //to allow associating with comments
var PostSchema = new mongoose.Schema({
    name: {type: String, required: true},
    text: {type: String, required: true},
    likes: {type: Number, required: false},
    replies: [{type: Schema.Types.ObjectId, ref:'Reply'}]
}, {timestamps: true});
var Post = mongoose.model('Post', PostSchema);