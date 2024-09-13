import vegitable from "../../assest/img/eggferfer.png";

const Catagories = () => {
  return (
    <div>
      <p className="text-3xl mb-10 text-center font-semibold text-gray-500 tracking-widest">
        Catagories
      </p>
      <div className="flex flex-col items-center md:flex-row flex-wrap justify-around px-5 gap-6">
        <div className="relative">
          <img src={vegitable} alt="veg" />
          <div className="absolute top-0  text-lg font-bold text-red-600 tracking-wider bg-gray-50">
            Vegitable
          </div>
        </div>
        <div className="relative">
          <img src={vegitable} alt="veg" />
          <div className="absolute top-0 text-lg font-bold text-red-600 tracking-wider bg-gray-50">
            Breakfast
          </div>
        </div>
        <div className="relative">
          <img src={vegitable} alt="veg" />
          <div className="absolute top-0 text-lg font-bold text-red-600 tracking-wider bg-gray-50">
            Lunch
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagories;
