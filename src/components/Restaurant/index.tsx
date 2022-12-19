import Image from "next/image";
import { type IRestaurant } from "src/types";

const Restaurant: React.FC<IRestaurant> = ({
  name,
  category,
  rating,
  location,
}) => {
  return (
    <div className="flex flex-col p-4">
      <Image src="" alt="" />
      <h2 className=" text-xl font-bold text-orange-800">{name}</h2>
      <p className="mt-0 mb-2 text-sm text-neutral-500">{category}</p>
      <div className="flex gap-2 text-sm text-neutral-800">
        <span>{rating} ⭐️</span>
        <span>Dist {location.district}</span>
      </div>
    </div>
  );
};

export default Restaurant;
