// // schemas/product.js

// export default {
//     name: 'product',
//     title: 'Product',
//     type: 'document',
//     fields: [
//       {
//         name: 'name',
//         title: 'Product Name',
//         type: 'string',
//         validation: Rule => Rule.required(),
//       },
//       {
//         name: 'price',
//         title: 'Price',
//         type: 'number',
//         validation: Rule => Rule.required(),
//       },
//       {
//         name: 'description',
//         title: 'Description',
//         type: 'text',
//       },
//       {
//         name: 'image',
//         title: 'Image',
//         type: 'image',
//         options: {
//           hotspot: true, // Allows users to focus on specific areas of the image
//         },
//       },
//       {
//         name: 'category',
//         title: 'Category',
//         type: 'reference',
//         to: [{ type: 'category' }],
//       },
//       {
//         name: 'stockQuantity',
//         title: 'Stock Quantity',
//         type: 'number',
//       },
//       {
//         name: 'isActive',
//         title: 'Is Active',
//         type: 'boolean',
//         initialValue: true,
//       },
//       {
//         name: 'slug',
//         title: 'Slug',
//         type: 'slug',
//         options: {
//           source: 'name',
//           maxLength: 96,
//         },
//       },
//     ],
//   };
  