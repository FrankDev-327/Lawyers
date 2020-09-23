'use strict';

const models = require('../models');
const graphql = require('graphql')
const {
   GraphQLSchema,
   GraphQLObjectType,
   GraphQLInt
} = graphql
const {
   LawyerType
} = require('../Schemas/index');

const lawyerQuery = new GraphQLObjectType({
   name: 'Query',
   fields: {
      lawyer_info: {
         type: LawyerType,
         args: {
            id: {
               type: GraphQLInt
            }
         },
         resolve: async (parentValue, args, request) => {
            console.log(args);
            var info;
            let setWhere = {
               where: {
                  id: args.id
               }
            }
            info = await models.Lawyers.findOne(setWhere)
            if (info !== null) {
               return info
            }
            info = {
               code: '404',
               msg: 'aaaaaa'
            };
            console.log(info)
            return info;
         }
      }
   }
});

const schema = new GraphQLSchema({
   query: lawyerQuery
})

module.exports = schema