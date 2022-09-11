import commerce from "./commerce";

export const getCategories = async () => {
  const { data: categories } = await commerce.categories.list();
  return categories;
};
