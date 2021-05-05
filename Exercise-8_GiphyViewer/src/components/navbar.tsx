import styled from 'styled-components';
import { Tab } from '../App';

interface NavBarProps {
    setTab: (tab: Tab) => void;
}

const NavBarHeader = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    top: 0;
    width: 100%;
`;

const MenuItem = styled.li`
    cursor: pointer;
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
`;

export const NavBar = (props: NavBarProps): JSX.Element => {
    return (
        <NavBarHeader>
            <MenuItem onClick={() => props.setTab('Trending')}>Trending</MenuItem>
            <MenuItem onClick={() => props.setTab('Search')}>Search</MenuItem>
        </NavBarHeader>
    );
}
