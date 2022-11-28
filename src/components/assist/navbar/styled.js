import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { NavLink as Link } from 'react-router-dom'

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100wv - 1000px) / 2);
  z-index: 10;
  flex-wrap: wrap;
`

export const NavToLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #000;
  }
`

export const Bars = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #edafb8;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
    margin-bottom: 20px;
    justify-content: flex-end;
  }
`

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`

export const NavIsLoggin = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 758px) {
    display: none;
  }
`

export const NavBtn = styled(Link)`
  text-decoration: none;
  display: flex-end;
  padding: 10px 22px;
  color: #000;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    transition: all 0.3s ease-in;
    background: #fff;
    color: #000;
  }
`

export const NavBtnTwo = styled(Link)`
  display: flex;
  text-decoration: none;
  padding: 10px 22px;
  color: #000;
  outline: none;
  border: 1px solid #edafb8;
  cursor: pointer;
  transition: all 0.3s ease-in;
  margin-right: 24px;

  &:hover {
    transition: all 0.3s ease-in;
    background: #fff;
    color: #000;
  }
`
