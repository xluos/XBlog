import { prismaObjectType } from "nexus-prisma";

export const Article = prismaObjectType({
  name: "Article",
  definition(t) {
    t.prismaFields(["id"])
    // TODO 后续再改为真数据
    t.field("pv", {
      type: 'Int',
      nullable: true,
      resolve: () => {
        return 0
      }
    })
    t.field('uv', {
      type: 'Int',
      nullable: true,
      resolve: () => {
        return 0
      }
    })
  },
});