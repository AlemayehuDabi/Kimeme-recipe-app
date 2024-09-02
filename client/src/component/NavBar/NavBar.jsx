import { Button, Navbar, TextInput } from "flowbite-react";
import navlogo from "../../assest/img/navlogo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className="container mx-auto px-4 py-2 flex justify-between items-center">
      <Navbar.Brand>
        <Link className="flex space-x-2 justify-center items-center" to="/">
          <img src={navlogo} className="w-10" />
          <span className=" font-bold tracking-wider text-xl text-gray-600">
            Kimeme
            <span className="text-red-600">Recipe</span>
          </span>
        </Link>
      </Navbar.Brand>
      <form>
        <TextInput placeholder="Search" className=" hidden md:inline-block" />
      </form>

      <div className="flex justify-center items-center md:order-2">
        <div>
          <Link to="/login">
            <Button outline pill gradientDuoTone="pinkToOrange">
              Login
            </Button>
          </Link>
        </div>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" className="hover:text-red-600">
          Home
        </Navbar.Link>
        <Navbar.Link href="/recipes" className="hover:text-red-600">
          Recipes
        </Navbar.Link>
        <Navbar.Link href="/catagories" className="hover:text-red-600">
          Catagories
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
