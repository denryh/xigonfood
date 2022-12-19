import Category, { type CategoryProps } from "./Category";
import salad from "../../../public/salad.png";
import pho from "../../../public/pho.png";
import comtam from "../../../public/comtam.png";
import steak from "../../../public/steak.png";

const Categories: React.FC = () => {
  const categories: CategoryProps[] = [
    {
      name: "Phở",
      thumbnail: pho,
    },
    {
      name: "Salad",
      thumbnail: salad,
    },
    {
      name: "Cơm tấm",
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
        <Category key={cat.name} name={cat.name} thumbnail={cat.thumbnail} />
      ))}
    </section>
  );
};

export default Categories;
