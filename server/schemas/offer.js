export default {
  name: "offer",
  title: "Offer",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "mission",
      title: "Mission",
      type: "text",
    },
    {
      name: "date",
      title: "Date",
      type: "date",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["job", "price", "internship"],
        layout: "radio",
      },
    },
  ],
};
