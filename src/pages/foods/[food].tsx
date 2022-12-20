import { type NextPage } from "next";
import { useRouter } from "next/router";
import NavBar from "@ui/NavBar";
import Restaurant from "@ui/Restaurant";
import { type IRestaurant } from "src/types";
import pho24 from "../../../public/pho24.jpeg";
import phophuvuong from "../../../public/phophuvuong.jpg";

const Food: NextPage = () => {
  const router = useRouter();
  const { food } = router.query;
  console.log(food);

  const restaurants: IRestaurant[] = [
    {
      id: "0",
      featureUrl: pho24,
      name: "PHỞ24",
      category: "Pho",
      signature: "Pho Dac Biet Tai Vien",
      range: [50, 100],
      rating: 4.5,
      location: {
        district: "11",
        street: "Ton That Hiep",
      },
    },
    {
      id: "1",
      featureUrl: phophuvuong,
      name: "Phở Phú Vương",
      category: "Pho",
      signature: "Phở Đặc Biệt",
      range: [70, 90],
      rating: 5,
      location: {
        district: "1",
        street: "Nguyen Thai Binh",
      },
    },
  ];

  return (
    <>
      <NavBar />
      <div className="mt-4 flex flex-col gap-8 p-4">
        {restaurants.map((restaurant) => (
          <Restaurant key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </>
  );
};

export default Food;
