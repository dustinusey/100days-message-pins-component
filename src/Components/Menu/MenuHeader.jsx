import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pins from "../Pins";
const MenuHeader = (props) => {
  const { pins, setPins } = props;
  return (
    <>
      <div className="flex items-center gap-2">
        <span className="min-w-[15px] h-[15px] rounded-full p-1 bg-red-400 cursor-pointer hover:bg-red-500 duration-200"></span>
        <span className="min-w-[15px] h-[15px] rounded-full p-1 bg-yellow-200 cursor-pointer hover:bg-yellow-300 duration-200"></span>
        <span className="min-w-[15px] h-[15px] rounded-full p-1 bg-emerald-400 cursor-pointer hover:bg-emerald-500 duration-200"></span>
      </div>

      <div className="flex justify-between text-white mt-5">
        <h1 className="text-2xl font-bold">Messages</h1>
        <FontAwesomeIcon icon={faPenToSquare} />
      </div>

      <form>
        <input
          className="w-full p-3 mt-2 mb-5 rounded-md bg-zinc-700 text-white outline-none"
          type="text"
          placeholder="Search"
        />
      </form>
      {pins.length > 0 && <Pins />}
    </>
  );
};
export default MenuHeader;
