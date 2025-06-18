import { Banner } from "../molecule/Banner";
import NavBar from "../molecule/NavBar";

export default function Header() {
  return (
    <>
      <Banner />
      <header className="h-20 flex px-4 md:px-8 lg:px-12 xl:px-24 items-center">
        <NavBar />
      </header>
    </>
  );
}
