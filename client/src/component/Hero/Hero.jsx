import heroImg from "../../assest/img/heroimg.webp";

const Hero = () => {
  return (
    <main className="container mx-auto">
      <div className="flex w-full justify-between px-10 py-5">
        <div className="p-8 flex flex-col justify-around space-y-10">
          <h1 className="text-5xl text-red-500 font-bold tracking-wide font-gupter">
            Discover Delicious Recipes
            <span className="block text-center text-gray-300 text-4xl mt-8">
              from Ethiopia
            </span>
          </h1>
          <button className="font-gupter shadow-lg bg-red-500 border-2 border-red-700 py-4 px-10 rounded-md mx-auto  text-white text-2xl font-semibold tracking-wider">
            Explore More
          </button>
        </div>
        <div className="mt-10">
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
