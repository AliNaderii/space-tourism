// TOOLS
import { useState } from "react";
import { NavLink } from "react-router-dom";
// STYLES
import { StyledNavbar, Logo, Links, HamburgerButton, SideMenu } from "../styles/Navbar.styled";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <StyledNavbar>
      <Logo>
        <img src='/assets/shared/logo.svg' alt="logo" />
        <div className="line"></div>
      </Logo>

      <Links>

        <NavLink to='/' className='nav-text'>
          <span>00</span>
          HOME
        </NavLink>

        <NavLink to='/destination/moon' className='nav-text'>
          <span>01</span>DESTINATION
        </NavLink>

        <NavLink to='/crew/douglas-hurley' className='nav-text'>
          <span>02</span>
          CREW
        </NavLink>

        <NavLink to='/technology/launch-vehicle' className='nav-text'>
          <span>03</span>
          TECHNOLOGY
        </NavLink>
      </Links>

      <HamburgerButton aria-label="menu" onClick={ () => toggleMenu() }>
        <img src='/assets/shared/icon-hamburger.svg' alt="menu icon" />
      </HamburgerButton>

      { showMenu && (
        <SideMenu>
          <button onClick={ toggleMenu } aria-label='close button'>
            <img src='/assets/shared/icon-close.svg' alt="close icon" />
          </button>
          <NavLink to='/' className='nav-text'>
            <span>00</span>
            HOME
          </NavLink>

          <NavLink to='/destination/moon' className='nav-text'>
            <span>01</span>DESTINATION
          </NavLink>

          <NavLink to='/crew/douglas-hurley' className='nav-text'>
            <span>02</span>
            CREW
          </NavLink>

          <NavLink to='/technology/launch-vehicle' className='nav-text'>
            <span>03</span>
            TECHNOLOGY
          </NavLink>
        </SideMenu>
      ) }
    </StyledNavbar>
  );
}