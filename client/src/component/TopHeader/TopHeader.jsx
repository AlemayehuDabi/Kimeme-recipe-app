import { Link } from "react-router-dom";
import Navbar from "../../assest/img/navlogo.png";

const TopHeader = () => {
  return (
    <header className="flex items-center justify-around mb-5 bg-gray-50 py-5">
      {/* logo */}
      <Link to="/">
        <div className="flex space-x-2 items-center">
          <div>
            <img src={Navbar} alt="nav-logo" className="w-20" />
          </div>
          {/* writting */}
          <div className="flex flex-col">
            <span className="whitespace-nowrap font-bold text-gray-500 text-2xl tracking-wider">
              Kimeme
            </span>
            <span className="whitespace-nowrap font-bold text-red-500 text-2xl tracking-wider">
              Recipe
            </span>
          </div>
        </div>
      </Link>

      {/* discover */}
      <Link to="/sign-up">
        <div>
          <p className="text-xl md:text-3xl font-bold tracking-wide text-red-600">
            Discover Ethiopia Flavour
          </p>
        </div>
      </Link>
    </header>
  );
};

export default TopHeader;
