import Gursha from "../../assest/img/gursha.jpg";

const Notification = () => {
  return (
    <section className="bg-gray-50 w-full py-10 h-screen">
      <div className="w-3/5 shadow-md mx-auto  py-8 px-3 bg-white rounded-lg">
        <div className="mb-4">
          <h1 className="text-3xl font-semibold text-red-500">Notification</h1>
        </div>
        <hr />
        <div className="mt-4 flex flex-col gap-5">
          <div className="shadow-md hover:shadow-lg py-2 px-5 flex gap-4 bg-red-50 hover:bg-red-100 rounded-md">
            <div className="w-14 h-14 rounded-full">
              <img src={Gursha} className="w-full h-full rounded-full" />
            </div>
            <div>
              <div className="text-gray-700">
                <span className="font-bold text-xl text-black px-1">
                  John Doe
                </span>
                liked your recipe
                <span className="px-1 font-bold text-black text-xl">
                  Chocolate Cake
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-300 font-semibold">
                  2 hours ago
                </p>
              </div>
            </div>
          </div>

          <div className="shadow-md hover:shadow-lg py-2 px-5 flex gap-4 bg-red-50 hover:bg-red-100 rounded-md">
            <div className="w-14 h-14 rounded-full border-2">
              <img />
            </div>
            <div>
              <div className="text-gray-700">
                <span className="font-bold text-xl text-black px-1">
                  John Doe
                </span>
                liked your recipe
                <span className="px-1 font-bold text-black text-xl">
                  Chocolate Cake
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-300 font-semibold">
                  2 hours ago
                </p>
              </div>
            </div>
          </div>

          <div className="shadow-md hover:shadow-lg py-2 px-5 flex gap-4 bg-red-50 hover:bg-red-100 rounded-md">
            <div className="w-14 h-14 rounded-full border-2">
              <img />
            </div>
            <div>
              <div className="text-gray-700">
                <span className="font-bold text-xl text-black px-1">
                  John Doe
                </span>
                liked your recipe
                <span className="px-1 font-bold text-black text-xl">
                  Chocolate Cake
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-300 font-semibold">
                  2 hours ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notification;
