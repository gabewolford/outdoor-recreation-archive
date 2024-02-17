import { defineField } from "sanity";
import { ImagesIcon } from "@sanity/icons";

export const homeImages = {
  name: "homeImages",
  title: "Home Images",
  type: "document",
  fields: [
    defineField({
      name: "section",
      title: "Section",
      type: "string",
      options: {
        list: [
          { title: "About", value: "About" },
          { title: "Books", value: "Books" },
          { title: "Catalogs", value: "Catalogs" },
          { title: "Magazines", value: "Magazines" },
          { title: "Manuscripts", value: "Manuscripts" },
          { title: "Periodicals", value: "Periodicals" },
          { title: "Photographs", value: "Photographs" },
          {
            title: "Research Fellowship",
            value: "Research Fellowship",
          },
          { title: "Donate", value: "Donate" },
        ],
      },
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "string",
      options: {
        list: [
          { title: "Red 🟥", value: "Red" },
          { title: "Orange 🟧", value: "Orange" },
          { title: "Yellow 🟨", value: "Yellow" },
          { title: "Green 🟩", value: "Green" },
          { title: "Blue 🟦", value: "Blue" },
          { title: "Purple 🟪", value: "Purple" },
          { title: "Brown 🟫", value: "Brown" },
          { title: "Black ⬛", value: "Black" },
          { title: "White ⬜", value: "White" },
        ],
      },
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      description: "All should match the dedicated color above.",
      of: [
        {
          name: "images",
          title: "Images",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      sortable: true,
      validation: (Rule) => Rule.required().length(15).unique(),
    }),
  ],
  icon: ImagesIcon,
  preview: {
    select: {
      title: "section",
      subtitle: "color",
    },
    prepare({ title, subtitle }) {
      return {
        title: title,
        subtitle: subtitle,
        media: ImagesIcon,
      };
    },
  },
};
