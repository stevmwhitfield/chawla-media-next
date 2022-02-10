export default {
  name: "homeGallery",
  title: "Home Gallery",
  type: "document",
  fields: [
    {
      name: "imageList",
      title: "Image List",
      type: "array",
      of: [
        {
          name: "galleryImage",
          title: "Gallery Image",
          type: "object",
          fields: [
            {
              type: "image",
              name: "image",
              title: "Image",
              options: {
                hotspot: true,
              },
            },
            {
              type: "string",
              name: "description",
              title: "Description",
              description:
                "Any text here will show as the alt text of the image.",
            },
          ],
        },
      ],
    },
  ],
};
