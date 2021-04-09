import React from 'react';
import styled from "styled-components";
import { Message } from './message';

interface MessageOverviewProps {
    messages: Message[];
    unreadMessages: number;
    markMessageAsRead: (arrayIndex: number) => void;
}

const NotificatioNBanner = styled.p`
    color: red;
`;

const MessageElement = styled.div<{ unread: boolean }>`
    border: 1px solid ${props => props.theme.colors.text};
    background-color: ${({ unread }) => (
        unread ? props => props.theme.colors.background : 'paleturquoise'
    )};
`;

const MessageSubject = styled.p`
    font-weight: bold;
`;

export const MessageOverview = (props: MessageOverviewProps): JSX.Element => {
    return (
        <>
            {props.unreadMessages > 0 && <NotificatioNBanner>You&apos;ve got {props.unreadMessages} unread messages</NotificatioNBanner>}
            {props.messages.map((message, index) =>
                <MessageElement unread={message.read} key={index} onClick={() => props.markMessageAsRead(index)}>
                    <MessageSubject className="subject">{message.subject}</MessageSubject>
                    <p>{message.text}</p>
                </MessageElement>
            )}
        </>
    );
}