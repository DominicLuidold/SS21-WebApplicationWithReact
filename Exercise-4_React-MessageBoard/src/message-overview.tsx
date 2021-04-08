import React from 'react';
import { Message } from './message';

interface MessageOverviewProps {
    messages: Message[];
    unreadMessages: number;
    markMessageAsRead: (arrayIndex: number) => void;
}

export const MessageOverview = (props: MessageOverviewProps) => {
    return (
        <>
            {props.unreadMessages > 0 && <p className="unread-notifier">You&apos;ve got {props.unreadMessages} unread messages</p>}
            {props.messages.map((message, index) =>
                <div key={index} className={message.read ? 'message' : 'message unread'} onClick={() => props.markMessageAsRead(index)}>
                    <p className="subject">{message.subject}</p>
                    <p>{message.text}</p>
                </div>
            )}
        </>
    );
}