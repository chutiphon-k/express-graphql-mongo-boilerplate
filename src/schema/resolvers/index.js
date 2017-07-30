import { merge } from 'lodash'

import RootMutaion from 'schema/resolvers/RootMutaions'
import RootQuery from 'schema/resolvers/RootQuery'

export default merge(RootMutaion, RootQuery)
