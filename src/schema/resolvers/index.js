import { merge } from 'lodash'
import * as queries from 'schema/resolvers/queries'

const rootResolvers = {
	RootQuery: queries
}

export default merge(rootResolvers)
