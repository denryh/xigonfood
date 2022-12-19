import { type NextPage } from "next";
import { useRouter } from "next/router";
import NavBar from "@ui/NavBar";

const Food: NextPage = () => {
  const router = useRouter();
  const { food } = router.query;

  return (
    <>
      <NavBar />
      <div>{food}</div>
    </>
  );
};

export default Food;
