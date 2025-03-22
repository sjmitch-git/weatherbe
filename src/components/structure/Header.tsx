import { METDATA } from "@lib/constants";
import Nav from "@components/structure/Nav";
import Link from "next/link";

const Header = () => {
  return (
    <header className={`p-4 bg-gray-200 flex justify-center`}>
      <div className="container max-w-4xl flex justify-between items-center">
        <Link href="./">
          <span className="text-2xl font-semibold">{METDATA.defaultSiteTitle}</span>
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
