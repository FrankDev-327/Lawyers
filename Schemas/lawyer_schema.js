'use strict';

const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
} = graphql


const lawyersType = new GraphQLObjectType({
    name: 'Lawyers',
    fields: {
        name: {
            type: GraphQLString
        },
        lastName: {
            type: GraphQLString
        }
    }
});

module.exports = lawyersType;