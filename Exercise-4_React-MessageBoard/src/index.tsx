import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Form } from "./form";
import { Message } from "./message";
import { MessageOverview } from "./message-overview";
import { NavBar } from "./navbar";

import './style.css';

const App = () => {
  const [showMessageOverview, setMessageOverview] = useState(false);
  const [messages, setMessages] = useState<Array<Message>>([]);
  const [unreadMessages, setUnreadMessages] = useState(0);

  function addNewMessage(newMessage: Message): void {
    setMessages([...messages, newMessage]);
    setUnreadMessages(unreadMessages + 1);
    setMessageOverview(true);
  }

  function markMessageAsRead(arrayIndex: number): void {
    const messageList = messages;
    messageList[arrayIndex] = { ...messageList[arrayIndex], read: true };

    setMessages(messageList);
    setUnreadMessages(unreadMessages - 1);
  }

  return (
    <>
      <NavBar unreadMessages={unreadMessages} showMessageOverview={setMessageOverview} />
      <div className="content">
        {
          showMessageOverview ?
            <MessageOverview messages={messages} unreadMessages={unreadMessages} markMessageAsRead={markMessageAsRead} /> :
            <Form addNewMessage={addNewMessage} />
        }
      </div>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
