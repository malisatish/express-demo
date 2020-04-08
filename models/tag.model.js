const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TagSchema = new Schema({
        name: {
            type: String
        },
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

const Tag = mongoose.model('Tag', TagSchema);
module.exports = Tag;
