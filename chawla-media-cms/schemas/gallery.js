export default {
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "list",
      title: "Image List",
      type: "array",
      of: [
        {
          name: "item",
          title: "List Item",
          type: "object",
          fields: [
            {
              name: "description",
              title: "Description",
              type: "string",
              description:
                "Any text here will show as the alt text of the image. Used to improve search rankings",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
                metadata: [
                  "dimensions",
                  "hasAlpha",
                  "isOpaque",
                  "blurhash",
                  "lqip",
                  "palette",
                ],
              },
            },
          ],
        },
      ],
    },
  ],
};

// export default {
//   name: "gallery",
//   title: "Gallery",
//   type: "document",
//   fields: [
//     {
//       name: "imageList",
//       title: "Image List",
//       type: "array",
//       of: [
//         {
//           name: "galleryImage",
//           title: "Gallery Image",
//           type: "object",
//           fields: [
//             {
//               type: "image",
//               name: "image",
//               title: "Image",
//               options: {
//                 hotspot: true,
//               },
//             },
//             {
//               type: "string",
//               name: "description",
//               title: "Description",
//               description:
//                 "Any text here will show as the alt text of the image.",
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };
