import Message from "./Message";

const Messages = (props) => {
  const { messages } = props;
  return (
    <ul className="flex flex-col gap-2">
      {messages.map((msg, index) => {
        return <Message key={index} message={msg} />;
      })}
    </ul>
  );
};
export default Messages;
