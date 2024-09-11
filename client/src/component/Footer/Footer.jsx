import { Footer } from "flowbite-react";
import Navbar from "../../assest/img/navlogo.png";

const FooterComp = () => {
  return (
    <Footer
      container
      className="mt-20 w-full bg-red-50 rounded-t-2xl border-t-2 border-red-600"
    >
      <div className="flex flex-col w-full ">
        <div className="w-full flex items-center justify-evenly">
          <Footer.Brand href="/">
            <div className="flex space-x-2 items-center">
              <div>
                <img src={Navbar} alt="nav-logo" className="w-14" />
              </div>
              {/* writting */}
              <div className="flex flex-col">
                <span className="whitespace-nowrap font-bold text-gray-500 text-xl tracking-wider">
                  Kimeme
                </span>
                <span className="whitespace-nowrap font-bold text-red-500 text-xl tracking-wider">
                  Recipe
                </span>
              </div>
            </div>
          </Footer.Brand>

          <Footer.LinkGroup className="text-gray-600 tracking-wide flex justify-around font-medium">
            <Footer.Link href="#">Recipe</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Explore</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright
          href="#"
          by="KimemeRecipe™"
          year={2022}
          className="flex justify-center text-gray-400"
        />
      </div>
    </Footer>
  );
};

export default FooterComp;
