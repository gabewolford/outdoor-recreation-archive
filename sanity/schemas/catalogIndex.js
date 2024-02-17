import { defineField, defineType, defineArrayMember } from "sanity";

export const catalogIndex = defineType({
  name: "catalogIndex",
  title: "Catalog Index",
  type: "document",
  fields: [
    defineField({
      name: "brand",
      title: "Brand",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "brand",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 50),
      },
    }),
    defineField({
      name: "collection",
      title: "Catalog Collection",
      type: "array",
      of: [defineArrayMember({ type: "catalogDetails" })],
    }),
  ],
});
