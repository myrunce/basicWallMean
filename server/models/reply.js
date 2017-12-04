//this is the comment model. When users post they can add comments. Comments can also be liked.
var mongoose = require('mongoose'); //MongoDb will be our database
var Schema = mongoose.Schema; //to allow associating with comments
var ReplySchema = new mongoose.Schema({
    name: {type: String, required: true},
    text: {type: String, required: true},
    likes: {type: Number, required: false},
    _post: [{type: Schema.Types.ObjectId, ref:'Post'}]
}, {timestamps: true});
var Reply = mongoose.model('Reply', ReplySchema);