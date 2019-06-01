import { rule, shield } from 'graphql-shield'
import { getUserId } from '../lib/utils'


const rules = {
  isAuthUser: rule()((parent, args, context) => {
    const userId = getUserId(context)
    return Boolean(userId)
  })
}

export const permissions = shield({
  Mutation: rules.isAuthUser,
})
