import Image from "next/image";
import { type IRestaurant } from "src/types";

const Restaurant: React.FC<IRestaurant> = ({
  featureUrl,
  name,
  category,
  signature,
  range,
  rating,
  location,
}) => {
  return (
    <div className="flex flex-col overflow-hidden rounded border border-orange-800 bg-orange-100">
      <Image src={featureUrl} alt={name} />
      <div className="relative p-2">
        <span className="absolute -top-10 right-2 m-0 rounded bg-orange-200 px-1 font-bold text-orange-800">
          {rating.toFixed(1)} ⭐️
        </span>
        <h2 className="m-0 text-xl font-bold text-orange-800">{name}</h2>
        <p className="mt-0 mb-2 text-neutral-600">Category: {category}</p>
        <div className="text flex items-center gap-2 text-sm text-neutral-800">
          <span className="font-semibold">Dist. {location.district}</span>
          <span className="font-light">{`(${range[0]}K - ${range[1]}K)`}</span>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
