export default {
  name: "portfolioCard",
  title: "Portfolio Card",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").replace("'", ""),
      },
      description:
        "Click the 'Generate' button. Do not manually enter the value here.",
    },
    {
      name: "type",
      title: "Type of Photoshoot",
      type: "string",
      description: "e.g., 'car shoot' or 'cinematic'",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
};
