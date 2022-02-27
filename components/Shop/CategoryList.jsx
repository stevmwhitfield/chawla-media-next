import Link from "next/link";
import Category from "./Category";

const CategoryList = ({ categories }) => {
  if (!categories) return;

  return (
    <ul>
      {categories.map((cat) => {
        return (
          <li key={cat.id}>
            <Link href={`/categories/${cat.slug}`} passHref>
              <a>
                <Category name={cat.name} />
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryList;
