import styled from 'styled-components';

export const StyledNavbar = styled.div`
  height: 96px;
  margin-top: 45px;
  padding-left: 55px;
  display: grid;
  grid-template-columns: 2fr 3fr;
  align-items: center;

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {

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

  a.active {
    height: 100%;
    display: flex;
    align-items: center;
    margin-top: 3px;
    border-bottom: 3px solid #fff;
  }

  /* MEDIA QUERY */
  
  @media (max-width: 768px) {
    padding: 0 27px;

    grid-template-columns: repeat(4, 100px);

    span {
      display: none;
    }
  }

  @media (max-width: 425px) {
    display: none;
  }
`;

export const HamburgerButton = styled.button`
  display: none;

  @media (max-width: 425px) {
    display: block;
    position: absolute;
    top: 33px;
    right: 24px;
  }
`;