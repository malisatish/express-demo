const { PostModel } = require('../models');

const self = module.exports = {
    /* create new post */
    create: async (objData) => {
        return await PostModel.create(objData);
    },  

    find: async (query = {}, extraOptions = {}) => {
        return await PostModel.find(query, extraOptions);
    },

    findOne: async (query = {}, extraOptions = {}) => {
        return await PostModel.findOne(query);
    },

    update: async (query = {}, instance = {}) => {
        return await PostModel.findOneAndUpdate(query, instance);
    },

    remove: async (query) => {
        return await PostModel.deleteOne(query);
    },

    filter: async (sortField , sortDirection, extraOptions = {}) => {
        let query = { deletedAt: {$exists: false}};
        let option = { sort: (sortDirection === 'ASC' ? '':'-' ) + sortField };
        console.log("option", sortDirection, option)
        return await PostModel.find(query, extraOptions, option);
    },

    retrieve: async (query={}) => {
        let pipeline = [
            {
                $match: query
            },
            {
                $unwind: {
                  path: "$tags"
                }
            },
            {
                $lookup: {
                  from: "tags",
                  localField: "tags",
                  foreignField: "_id",
                  as: "tags"
                }
            },
            {
                $unwind: {
                  path: "$tags"
                }
            },
            {
                $group: {
                    _id: "$_id",
                    tags: {$push : "$tags"},
                    upVote : {$first: "$upVote" },
                    downVote: {$first: "$downVote"},
                    title: {$first: "$title"},
                    body: { $first: "$body"},
                    createdAt: { $first: "$createdAt"},
                    updatedAt: { $first: "$updatedAt"}
                }
            }

        ];
        return await PostModel.aggregate(pipeline);
        console.log("result  =============>>>>", res)
    }
}