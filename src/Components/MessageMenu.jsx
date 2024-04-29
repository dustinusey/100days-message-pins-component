const MessageMenu = () => {
  return (
    <ul className="absolute right-[25px] bg-zinc-800 p-3 w-[175px] rounded-md z-10 shadow-md shadow-zinc-900">
      <li className="p-2 rounded-md hover:bg-zinc-700 duration-200 cursor-pointer">
        Pin Message
      </li>
      <li className="p-2 rounded-md hover:bg-zinc-700 duration-200 cursor-pointer">
        Delete Message
      </li>
    </ul>
  );
};
export default MessageMenu;
