import { Button } from "flowbite-react";
import heroImg from "../../assest/img/heroimg.webp";

const Hero = () => {
  return (
    <main className="container mx-auto md:mb-10">
      <div className="flex flex-col md:flex-row w-full justify-between px-10 py-5">
        <div className="p-8 flex flex-col justify-around items-center space-y-10">
          <h1 className="text-3xl md:text-3xl lg:text-5xl text-red-500 font-bold tracking-wide font-gupter">
            Discover Delicious Recipes
            <span className="block text-center text-gray-400 text-3xl mt-8">
              from Ethiopia
            </span>
          </h1>
          <Button gradientDuoTone="pinkToOrange" outline>
            <span className="text-lg md:text-xl tracking-wide font-semibold px-6 py-2">
              Explore More
            </span>
          </Button>
        </div>
        <div className="mt-10 mb-28 md:mb-0">
          <img
            src={heroImg}
            className=""
            style={{
              width: "30rem",
            }}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
