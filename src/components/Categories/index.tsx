import Category, { type CategoryProps } from "./Category";
import salad from "../../../public/salad.webp";
import pho from "../../../public/pho.webp";
import comtam from "../../../public/comtam.webp";
import steak from "../../../public/steak.webp";
import Link from "next/link";

const Categories: React.FC = () => {
  const categories: CategoryProps[] = [
    {
      name: "Pho",
      thumbnail: pho,
    },
    {
      name: "Salad",
      thumbnail: salad,
    },
    {
      name: "Broken Rice",
      thumbnail: comtam,
    },
    {
      name: "Steak",
      thumbnail: steak,
    },
  ];

  return (
    <section className="flex flex-col border-t-2 border-b-2">
      {categories.map((cat) => (
        <Link key={cat.name} href={`/foods/${cat.name.toLowerCase()}`}>
          <Category name={cat.name} thumbnail={cat.thumbnail} />
        </Link>
      ))}
    </section>
  );
};

export default Categories;
