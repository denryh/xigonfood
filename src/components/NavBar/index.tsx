import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();

  return (
    <nav className="font-serif relative grid place-items-center bg-orange-200 p-6 text-orange-800">
      <span
        onClick={() => router.back()}
        className="absolute top-8 left-4 cursor-pointer rounded-full border-2 border-orange-800 px-4 hover:bg-white"
      >
        &lt;
      </span>
      <span className="font-display text-3xl">xigonfood</span>
    </nav>
  );
};

export default NavBar;
