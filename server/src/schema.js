const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    dummy: String
  }

  type Subscription {
    somethingChanged: Result
  }

  type Result {
    id: String
  }

  schema {
    subscription: Subscription
  }
`;

module.exports = typeDefs;