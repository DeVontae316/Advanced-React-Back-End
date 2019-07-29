//This file connects with remote Database so we can query with Javascript via resolvers

const {Prisma} = require('prisma-binding');

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug:false
});

module.exports = db;
