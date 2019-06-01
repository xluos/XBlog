import { prismaObjectType } from "nexus-prisma";

export const Classify = prismaObjectType({ 
  name: 'Classify',
   // Expose all generated `Todo`-queries
  definition: t => t.prismaFields(['*'])
})