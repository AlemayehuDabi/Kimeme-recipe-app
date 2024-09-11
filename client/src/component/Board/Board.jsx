import { Button } from "flowbite-react";
import background from "../../assest/img/background.jpg";

const Board = () => {
  return (
    <div className="w-full flex items-center justify-center relative mt-10 mb-10 h-[400px] md:h-[520px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${background})`,
          //   backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(1.5px)",
          WebkitFilter: "blur(1.5px)",
          //   backgroundSize: "cover",
        }}
      ></div>

      <div className="flex flex-col justify-center items-center gap-10">
        <p className="text-white text-5xl z-10 font-semibold tracking-wider">
          Explore Ethiopian food
        </p>
        <Button outline color="failure">
          <span className="text-xl px-4 tracking-wider font-semibold">
            Explore
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Board;
