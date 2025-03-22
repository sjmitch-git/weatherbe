import { METDATA } from "@lib/constants";

const Footer = () => {
  return (
    <footer className="p-4 mt-8 bg-gray-300" dir="ltr">
      <div className="container mx-auto text-center space-y-4">
        <p className="text-sm text-gray-600">{METDATA.defaultSiteTitle}</p>
        <p className="text-sm text-gray-600">© 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
