import LeftNav from "../../component/LeftNav/LeftNav";
import NavBar from "../../component/NavBar/NavBar";
import Post from "../../component/Post/Post";
import RightNav from "../../component/RightNav/RightNav";

const DashBoard = ({ isFixed }) => {
  return (
    <>
      <NavBar isFixed={isFixed} />
      <div
        className={`grid grid-cols-3 grid-flow-col gap-40 xl:gap-14  ${
          isFixed ? "mt-16" : "mt-10"
        }`}
      >
        <aside className="col-span-1">
          <LeftNav />
        </aside>

        <section className="col-span-1">
          <Post />
        </section>

        <aside className="col-span-1">
          <RightNav />
        </aside>
      </div>
    </>
  );
};

export default DashBoard;
