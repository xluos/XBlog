import { prismaObjectType } from "nexus-prisma";

export const Discuss = prismaObjectType({ 
  name: 'Discuss',
   // Expose all generated `Todo`-queries
  definition: t => t.prismaFields(['*'])
})