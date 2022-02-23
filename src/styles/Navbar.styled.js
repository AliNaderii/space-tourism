import styled from 'styled-components';

export const StyledNavbar = styled.div`
  height: 96px;
  margin-top: 45px;
  padding-left: 55px;
  display: grid;
  grid-template-columns: 2fr 3fr;
  align-items: center;

  @media (max-width: 1200px) {
    margin-top: 0;
    grid-template-columns: 1fr 1fr;
    padding-left: 39px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  .line {
    width: 100%;
    height: 1px;
    background-color: #fff;
    opacity: 0.25;
    z-index: 2;
    transform: translateX(65px);
  }

  /* MEDIA QUERY */

  @media (max-width: 1200px) {

    .line {
      display: none;
    }
  }

  @media (max-width: 425px) {
    
    img{
      margin-left: 0;
      position: absolute;
      top: 24px;
      left: 24px;
    }
  }
`;

export const Links = styled.nav`
  height: 100%;
  padding: 0 165px 0 123px;
  display: grid;
  align-items: center;
  justify-items: center;
  justify-content: center;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);

  span {
    font-weight: 700;
    margin-right: 11px;
  }

  a {
    height: 100%;
    display: flex;
    align-items: center;
  }

  a:hover {
    color: ${({ theme }) => theme.colors['Fog']};
    border-bottom: 3px solid rgba(255, 255, 255, 0.5);
    margin-top: 3px;
  }

  a.active {
    border-bottom: 3px solid #fff;
    margin-top: 3px;
  }

  .active {
    border-bottom: 3px solid #fff;
    margin-top: 3px;
  }

  /* MEDIA QUERY */
  
  @media (max-width: 1200px) {
    padding: 0 27px;

    grid-template-columns: repeat(4, 100px);

    span {
      display: none;
    }
  }

  @media (max-width: 570px) {
    display: none;
  }
`;

export const HamburgerButton = styled.button`
  display: none;

  @media (max-width: 570px) {
    display: block;
    position: absolute;
    top: 33px;
    right: 24px;
  }
`;

export const SideMenu = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 60%;
  padding: 118px 95px 0 32px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);

  span {
    font-weight: 700;
    margin-right: 11px;
  }

  button {
    position: absolute;
    top: 34px;
    right: 27px;
  }
`;