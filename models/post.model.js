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
        deleted_by: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: false
        },
        deleted_at: {
            type: String
        }
        
    },
    {
        timestamps: true
    }
);

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;
