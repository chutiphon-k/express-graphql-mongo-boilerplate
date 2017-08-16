import { merge } from 'lodash'
import GraphQLDate from 'graphql-date'

import * as queries from 'schema/resolvers/queries'
import * as mutations from 'schema/resolvers/mutations'

const rootResolvers = {
	Date: GraphQLDate,
	RootQuery: queries,
	RootMutation: mutations
}

export default merge(rootResolvers)
