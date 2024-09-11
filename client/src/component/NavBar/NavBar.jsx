import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const NavBar = ({ isSticky }) => {
  return (
    <Navbar
      className={`mx-auto z-10 px-4 py-2 flex justify-between items-center transition-transform duration-1000 ease-in-out ${
        isSticky
          ? "fixed top-0 w-full bg-white shadow-md scroll-py-4"
          : "relative"
      }`}
    >
      <div className="flex md:order-2">
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
      <Navbar.Toggle />

      <Navbar.Collapse>
        <Navbar.Link href="/" className="hover:text-red-600 tracking-wider">
          Home
        </Navbar.Link>
        <Navbar.Link
          href="#recipes"
          className="hover:text-red-600 tracking-wider"
        >
          Recipes
        </Navbar.Link>
        <Navbar.Link
          href="/catagories"
          className="hover:text-red-600 tracking-wider"
        >
          Catagories
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
