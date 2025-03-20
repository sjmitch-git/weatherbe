import { METDATA } from "@lib/constants";
import Nav from "@components/structure/Nav";

const Header = () => {
  return (
    <header className={`p-4 bg-gray-200 flex justify-center`} dir="ltr">
      <div className="container flex justify-between items-center">
        <span className="text-2xl font-semibold">
          {METDATA.defaultSiteTitle}
        </span>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
