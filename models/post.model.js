const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
        title: {
            type: String
        },
        body: {
            type: String
        },
        tags: [],
        createdAt: {
            type: String
        },
        updatedAt: {
            type: String
        },
        deletedAt: {
            type: String
        }
    }
);

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;
