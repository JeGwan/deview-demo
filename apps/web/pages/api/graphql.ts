import gql from 'graphql-tag'
import { createSchema, createYoga } from 'graphql-yoga'
import { NextApiRequest, NextApiResponse } from 'next'

import resolvers from 'lib/resolvers'
import typeDefs from 'lib/schema'

const schema = createSchema({
  typeDefs: gql(typeDefs),
  resolvers,
})

export default createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  schema,
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: '/api/graphql',
})
