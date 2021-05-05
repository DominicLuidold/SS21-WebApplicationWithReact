import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface NavBarProps {
    currentLanguage: string;
    setLanguage: (language: string) => void;
}

const NavBarHeader = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    top: 0;
    width: 100%;
    margin-bottom: 20px;
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
            <MenuItem><Link style={{textDecoration: 'none', color: 'white'}} to="/numbers">Numbers</Link></MenuItem>
            <MenuItem><Link style={{textDecoration: 'none', color: 'white'}} to="/date">Date</Link></MenuItem>
            <MenuItem><Link style={{textDecoration: 'none', color: 'white'}} to="/texts">Texts</Link></MenuItem>
            <MenuItem>
                <select defaultValue={props.currentLanguage} onChange={(e) => props.setLanguage(e.target.value)}>
                    <option value="de">de</option>
                    <option value="en">en</option>
                </select>
            </MenuItem>
        </NavBarHeader>
    );
}
