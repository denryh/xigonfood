import { type NextPage } from "next";
import Head from "next/head";
import Categories from "@ui/Categories";

const Foods: NextPage = () => {
  return (
    <>
      <Head>
        <title>xigonfood</title>
        <meta name="description" content="xigonfoods" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="font-serif grid place-items-center bg-orange-200 p-4 font-display text-3xl text-orange-800">
        <span>xigonfood</span>
      </nav>
      <main>
        <h1 className="my-8 mx-auto w-3/4 py-4 text-center text-2xl leading-6">
          Pick something
        </h1>
        <Categories />
      </main>
    </>
  );
};

export default Foods;
