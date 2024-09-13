import React from "react";
import NavBar from "../NavBar/NavBar";
import FooterComp from "../Footer/Footer";

const FourOFour = () => {
  const isFour = true;

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center mt-32">
        <div className="text-5xl font-bold text-gray-400">
          Page <span className="text-red-800">NOT</span> Found
        </div>
      </div>
      <FooterComp isFour={isFour} />
    </>
  );
};

export default FourOFour;
