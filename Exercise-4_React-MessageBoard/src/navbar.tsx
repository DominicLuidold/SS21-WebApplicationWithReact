import React, { Dispatch, SetStateAction } from 'react';

interface NavBarProps {
    unreadMessages: number;
    showMessageOverview: Dispatch<SetStateAction<boolean>>;
}

export const NavBar = (props: NavBarProps) => {
    return (
        <ul>
            <li onClick={() => props.showMessageOverview(true)}>Messages ({props.unreadMessages <= 5 ? props.unreadMessages : '5+'} unread)</li>
            <li onClick={() => props.showMessageOverview(false)}>New Message</li>
        </ul>
    );
}
