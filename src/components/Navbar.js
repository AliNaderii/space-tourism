// TOOLS
import { NavLink } from "react-router-dom";
// STYLES
import { StyledNavbar, Logo, Links, HamburgerButton } from "../styles/Navbar.styled";
// LOGO IMAGE
import LogoImage from '../assets/shared/logo.svg';
import { ReactComponent as Hamburger } from '../assets/shared/icon-hamburger.svg';

export default function Navbar() {
  return (
    <StyledNavbar>
      <Logo>
        <img src={ LogoImage } alt="logo" />
        <div className="line"></div>
      </Logo>

      <Links>

        <NavLink to='/' className='nav-text'>
          <span>00</span>
          HOME
        </NavLink>

        <NavLink to='/destination' className='nav-text'>
          <span>01</span>DESTINATION
        </NavLink>

        <NavLink to='/crew' className='nav-text'>
          <span>02</span>
          CREW
        </NavLink>

        <NavLink to='/technology' className='nav-text'>
          <span>03</span>
          TECHNOLOGY
        </NavLink>
      </Links>
      <HamburgerButton aria-label="menu">
        <Hamburger />
      </HamburgerButton>
    </StyledNavbar>
  );
}