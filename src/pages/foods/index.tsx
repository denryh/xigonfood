import { type NextPage } from "next";
import Head from "next/head";
import NavBar from "@ui/NavBar";
import Categories from "@ui/Categories";

const Foods: NextPage = () => {
  return (
    <>
      <Head>
        <title>xigonfood</title>
        <meta name="description" content="xigonfoods" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main>
        <p className="my-8 mx-auto p-2 text-center text-2xl leading-10">
          We have good places <br />
          for any kind of foods at every corner <br />
          in little{" "}
          <span className="font-display text-xl text-orange-800">Xi Gon</span>
        </p>
        <Categories />
      </main>
    </>
  );
};

export default Foods;
