import { defineField, defineType } from "sanity";

export const catalogDetails = defineType({
  name: "catalogDetails",
  title: "Catalog Details",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "file",
      title: "File",
      type: "file",
    }),
    defineField({
      name: "previewImage",
      title: "Preview Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "source",
      title: "Source",
      type: "text",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "string",
    }),
    defineField({
      name: "identifier",
      title: "Identifier",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "previewImage",
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title,
        media: media,
      };
    },
  },
});
