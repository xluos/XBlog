import { prismaObjectType } from "nexus-prisma";

export const Tags = prismaObjectType({ 
  name: 'Tags',
   // Expose all generated `Todo`-queries
  definition: t => t.prismaFields(['*'])
})