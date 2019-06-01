import { makePrismaSchema } from 'nexus-prisma'
import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'
import datamodelInfo from './generated/nexus-prisma'
import { permissions } from './permissions'
import path = require('path')
import * as allType from './schema'

const schema = makePrismaSchema({
  types: allType,

  prisma: {
    client: prisma,
    datamodelInfo
  },

  outputs: {
    schema: path.join(__dirname, './generated/schema.graphql'),
    typegen: path.join(__dirname, './generated/nexus.ts'),
  },
  
  typegenAutoConfig: {
    sources: [
      {
        source: path.join(__dirname, './generated/prisma-client/index.ts'),
        alias: 'prisma',
      },
    ],
  },
})

const server = new GraphQLServer({
  
  schema,

  // 中间件鉴权
  middlewares: [permissions],

  // 上下文
  context: ctx => {
    return {
      request: ctx.request,
      prisma,
    }
  },
})

server.start(() => console.log('Server is running on http://localhost:4000'))