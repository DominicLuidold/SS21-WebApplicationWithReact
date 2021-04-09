import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { DefaultTheme } from 'styled-components';
import { darkTheme, lightTheme } from '.';

interface NavBarProps {
    unreadMessages: number;
    switchTheme: (theme: DefaultTheme) => void;
    showMessageOverview: Dispatch<SetStateAction<boolean>>;
}

export const NavBar = (props: NavBarProps): JSX.Element => {
    function hangleChange(event: ChangeEvent<HTMLInputElement>): void {
        props.switchTheme(event.target.checked ? darkTheme : lightTheme);
    }

    return (
        <ul>
            <li onClick={() => props.showMessageOverview(true)}>Messages ({props.unreadMessages <= 5 ? props.unreadMessages : '5+'} unread)</li>
            <li onClick={() => props.showMessageOverview(false)}>New Message</li>
            <li><input type="checkbox" onChange={hangleChange} />Dark Theme?</li>
        </ul>
    );
}
