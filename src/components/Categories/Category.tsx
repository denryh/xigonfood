import Image, { type StaticImageData } from "next/image";

export type CategoryProps = {
  name: string;
  thumbnail: StaticImageData;
};

const Category: React.FC<CategoryProps> = ({ name, thumbnail }) => {
  return (
    <div className="flex w-full items-center justify-between border-b-2 border-t-2 px-8">
      <Image src={thumbnail} alt="salad" width={100} height={100} />
      <p className="flex-1 text-center text-xl">{name}</p>
    </div>
  );
};

export default Category;
