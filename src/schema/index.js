import { makeExecutableSchema } from 'graphql-tools'

import typeDefs from 'schema/typeDefs'
import resolvers from 'schema/resolvers'

export default makeExecutableSchema({ typeDefs, resolvers })
