import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { toggleTheme } from "../../Redux/theme/themeSlice";
import { useSelector, useDispatch } from "react-redux";

const NavBar = ({ isSticky, isFixed }) => {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <Navbar
      className={`mx-auto z-10 py-2 px-4  flex justify-between items-center transition-transform duration-1000 ease-in-out ${
        isSticky || isFixed
          ? "fixed top-0 w-full bg-white shadow-md scroll-py-4 transition duration-700"
          : "relative mb-5"
      }`}
    >
      <div className="flex items-center gap-5 md:order-2">
        <div className="flex space-x-10">
          <form>
            <TextInput
              placeholder="Search"
              className="hidden md:inline-block"
            />
          </form>
          <div className="flex space-x-5">
            <div>
              <Link to="/sign-up">
                <Button outline pill gradientDuoTone="pinkToOrange">
                  Sign Up
                </Button>
              </Link>
            </div>
            <div>
              <Link to="/login">
                <Button pill gradientDuoTone="pinkToOrange">
                  <span className="px-1">Login</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => dispatch(toggleTheme())}>
        {theme === "light" ? (
          <FaMoon size={18} />
        ) : (
          <IoSunnyOutline size={25} />
        )}
      </button>
      <Navbar.Toggle />

      <Navbar.Collapse>
        <Navbar.Link
          as={Link}
          to="/"
          className="hover:text-red-600 tracking-wider hover:border-b-2 hover:border-red-600 hover:pb-1 transition duration-500 hover:shadow-sm dark:border-red-600"
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/recipe"
          className="hover:text-red-600 tracking-wider hover:border-b-2 hover:border-red-600  hover:pb-1 transition duration-500 hover:shadow-sm dark:border-red-600"
        >
          Recipes
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/catagories"
          className="hover:text-red-600 tracking-wider hover:border-b-2 hover:border-red-600 hover:pb-1 transition duration-500 hover:shadow-sm dark:border-red-600"
        >
          Catagories
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
