import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle, DefaultTheme, ThemeProvider } from 'styled-components';
import { Form } from "./form";
import { Message } from "./message";
import { MessageOverview } from "./message-overview";
import { NavBar } from "./navbar";

import './style.css';

export const lightTheme: DefaultTheme = {
  colors: {
    background: 'white',
    text: 'black'
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    background: 'black',
    text: 'white'
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }
`;

const Content = styled.div`
  margin: 20px;
`;

const App = () => {
  const [showMessageOverview, setMessageOverview] = useState(false);
  const [messages, setMessages] = useState<Array<Message>>([]);
  const [theme, setTheme] = useState(lightTheme);

  function addNewMessage(newMessage: Message): void {
    setMessages([...messages, newMessage]);
    setMessageOverview(true);
  }

  function markMessageAsRead(index: number): void {
    if (!messages[index].read) {
      const messageList = [...messages];
      messageList[index] = {
        ...messageList[index],
        read: true
      };
      setMessages(messageList);
    }
  }

  function countUnreadMessages(): number {
    let unreadMessages = 0;
    messages.forEach(message => {
      if (!message.read) {
        unreadMessages++;
      }
    });

    return unreadMessages;
  }

  function switchTheme(theme: DefaultTheme): void {
    setTheme(theme);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar unreadMessages={countUnreadMessages()} showMessageOverview={setMessageOverview} switchTheme={switchTheme} />
        <GlobalStyle theme={theme} />
        <Content>
          {
            showMessageOverview ?
              <MessageOverview messages={messages} unreadMessages={countUnreadMessages()} markMessageAsRead={markMessageAsRead} /> :
              <Form addNewMessage={addNewMessage} />
          }
        </Content>
      </ThemeProvider>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
