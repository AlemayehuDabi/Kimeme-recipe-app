import LeftNav from "../../component/LeftNav/LeftNav";
import NavBar from "../../component/NavBar/NavBar";
import NavFooterSmall from "../../component/NavFooterSmall/NavFooterSmall";
import Post from "../../component/Post/Post";
import RightNav from "../../component/RightNav/RightNav";

const DashBoard = ({ isFixed }) => {
  return (
    <>
      <NavBar isFixed={isFixed} />
      <div className={`flex mdd:mx-10 xll:mx-10 xxl:justify-between`}>
        <div className="hidden mdd:flex-1 xll:flex-[1.7] mdd:flex justify-center">
          <LeftNav />
        </div>

        <div className="flex justify-center mx-5 sm:mx-auto mb-5 max-w-xl mdd:max-w-3xl flex-[1.5] mdd:mx-0 xll:flex-[2] ">
          <Post />
        </div>

        <div className="hidden xll:flex-[2] xll:flex justify-center">
          <RightNav />
        </div>
      </div>

      <div className="flex justify-center fixed bottom-0 w-full mdd:hidden">
        <NavFooterSmall />
      </div>
    </>
  );
};

export default DashBoard;
