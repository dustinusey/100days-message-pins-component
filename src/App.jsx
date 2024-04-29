import { useState } from "react";
import MessagesComponent from "./Components/MessagesComponent";
const App = () => {
  const [pins, setPins] = useState([]);
  const [messages, setMessages] = useState([
    {
      colorPrimary: "#FF697D",
      colorSecondary: "#A62A41",
      name: "Julia S",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus  mauris eget rhoncus mattis. Aenean bibendum justo sed mauris euismod,  quis congue velit consequat. Integer veger venenatis, ante quis",
      isPinned: false,
    },
    {
      colorPrimary: "#69FF81",
      colorSecondary: "#1B932E",
      name: "Sam T",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus  mauris eget rhoncus mattis. Aenean bibendum justo sed mauris euismod,  quis congue velit consequat. Integer veger venenatis, ante quis",
      isPinned: false,
    },
    {
      colorPrimary: "#7072E5",
      colorSecondary: "#494CBB",
      name: "Logan H",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus  mauris eget rhoncus mattis. Aenean bibendum justo sed mauris euismod,  quis congue velit consequat. Integer veger venenatis, ante quis",
      isPinned: false,
    },
    {
      colorPrimary: "#FFA767",
      colorSecondary: "#B3621E",
      name: "Brock R",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus  mauris eget rhoncus mattis. Aenean bibendum justo sed mauris euismod,  quis congue velit consequat. Integer veger venenatis, ante quis",
      isPinned: false,
    },
  ]);

  return (
    <div className="w-full h-screen grid place-items-center bg-indigo-500 p-5">
      <MessagesComponent messages={messages} pins={pins} setPins={setPins} />
    </div>
  );
};
export default App;
