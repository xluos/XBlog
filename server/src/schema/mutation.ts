
import { APP_SECRET } from '../lib/utils'
import { sign } from 'jsonwebtoken'
import { stringArg } from "nexus";
import { prismaObjectType } from 'nexus-prisma'
import { Context } from "../lib/types";

export const Mutation = prismaObjectType({ 
  name: 'Mutation',
  definition(t) {
    t.prismaFields(["*"])
    t.field("login", {
      type: "AuthPayload",
      args: {
        email: stringArg(),
        password: stringArg()
      },
      resolve: async (root, args, ctx:Context) => {
        const user = await ctx.prisma.user({
          email: args.email
        })
        if (!user) return {
          token: ''
        }
        if (args.password === user.password) {
          return {
            token: sign({
              userId: user.id,
            }, APP_SECRET)
          }
        } else {
          return {
            token: ''
          }
        }
      }
    })
  }
})