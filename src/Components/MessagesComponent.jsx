import MenuHeader from "./Menu/MenuHeader";
import Messages from "./Messages";
const MessagesComponent = (props) => {
  const { pins, setPins, messages } = props;
  return (
    <div className="bg-zinc-800 p-5 rounded-2xl w-full max-w-[600px] m-auto">
      <MenuHeader pins={pins} setPins={setPins} />
      <Messages messages={messages} />
    </div>
  );
};
export default MessagesComponent;
