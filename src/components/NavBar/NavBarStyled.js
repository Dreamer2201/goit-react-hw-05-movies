import { Link, NavLink } from "react-router-dom";
import styled from 'styled-components';

const ConteinerNav = styled.div`
    height: 50px;
    padding: 10px;
    display: flex;
    justify-content: left;
    align-items: center;
    box-shadow: 0px 5px 2px #d8d8d8;
`;

const ListNavBar = styled.ul`
    list-style: none;
    margin-left: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
`;
const ItemListNavBar = styled.li`
    margin-left: 20px;
    padding: 3px;
    text-decoration: none;
    
    border-radius: 10px;
    
`;

const LogoLink = styled(Link)`
    font-size: 24px;
    text-decoration: none;
    
`;
const NavList = styled(NavLink)`
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    color: #8B4513;
     text-shadow: 2px 2px 2px #F4A460;

  &.active {
    padding: 5px;
    color: blue;
    background-color: #CD853F;
    border-radius: 10px;
  }

`;

export { ConteinerNav, ListNavBar, ItemListNavBar, LogoLink, NavList };