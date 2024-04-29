import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";

import MessageMenu from "./MessageMenu";

const Message = (props) => {
  const [messageMenu, setMessageMenu] = useState(false);
  const { message } = props;

  return (
    <div className="flex items-center p-4 bg-zinc-700 rounded-lg bg-opacity-50 duration-200 hover:bg-zinc-600 cursor-pointer">
      {/* message image */}
      <div
        className="min-w-[75px] min-h-[75px] rounded-full"
        style={{
          backgroundColor: message.colorPrimary,
          border: `5px solid ${message.colorSecondary}`,
        }}
      ></div>

      {/* name and message */}
      <div className="text-white w-full ml-5">
        <p className="font-bold text-lg">{message.name}</p>
        <p className="shortenText">{message.message}</p>
      </div>

      {/* options menu */}
      <div
        onClick={() => {
          setMessageMenu(!messageMenu);
        }}
        className="text-white p-3 ml-3 rounded-md hover:bg-zinc-500 duration-200 relative"
      >
        <FontAwesomeIcon className="text-2xl" icon={faEllipsisVertical} />

        {/* message menu */}
        {messageMenu && <MessageMenu />}
      </div>
    </div>
  );
};
export default Message;
