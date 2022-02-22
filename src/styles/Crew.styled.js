import styled from 'styled-components';
import DesktopBackground from '../assets/crew/background-crew-desktop.jpg';
import TabletBackground from '../assets/crew/background-crew-tablet.jpg';
import MobileBackground from '../assets/crew/background-crew-mobile.jpg';

// CONTAIENER
export const Container = styled.div`
  height: 100vh;
  background: url(${DesktopBackground}) no-repeat fixed center;
  background-size: cover;
  overflow: auto;

  @media (max-width: 768px) {
    background: url(${TabletBackground}) no-repeat fixed center;
    background-size: cover;
  }

  @media (max-width: 425px) {
    background: url(${MobileBackground}) no-repeat fixed center;
    background-size: cover;
  }
`;


// CONTENT CONTAINER
export const ContentContainer = styled.section`
  display: flex;
  gap: 81px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    gap: 0;
  }

  @media (max-width: 425px) {
    justify-content: center;
    margin-top: 0;
  }
`;


// IMAGE SECTION
export const ImageSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  h5 {
    display: none;
  }

  img {
    margin-top: 62px;
    margin-right: 137px;
  }

  @media (max-width: 768px) {
    img {
      margin-top: 0;
      margin-right: 0;
      margin-left: 5px;
      width: 456px;
      height: 532px;
    }
  }

  @media (max-width: 425px) {
    order: 1;
    flex-direction: column;
    text-align: center;

    h5 {
      display: block;
      text-align: center;
    }

    img {
      width: 250px;
      height: 250px;
      margin: 32px auto;
      border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    }
  }
`;


// DESCRIPTION SECTION
export const Description = styled.section`
  margin-bottom: 94px;

  @media (max-width: 768px) {
    margin-bottom: 40px;

    h5 {
      margin-left: 39px;
    }
  }

  @media (max-width: 425px) {
    order: 2;
    display: flex;
    flex-direction: column;
    
    h5 {
      display: none;
    }
  }
`;

export const Info = styled.article`
  margin-top: 154px;
  margin-left: 166px;
  display: flex;
  flex-direction: column;

  h4 {
    opacity: 0.5;
  }

  h3 {
    text-transform: uppercase;
    margin: 15px 0 27px;
  }

  p {
    color: ${({ theme }) => theme.colors['Fog']};
    line-height: 32px;
  }

  @media (max-width: 768px) {
    margin: 60px 155px 40px;
    justify-content: center;
    text-align: center;

    h3 {
    margin: 8px 0 16px;
    }

    p {
      line-height: 28px;
    }
  }

  @media (max-width: 425px) {
    order: 2;
    margin: 0 24px 104px;

    p {
      line-height: 25px;
      text-align: center;
    }
  }
`;

export const Tabs = styled.div`
  display: flex;
  margin-top: 120px;
  margin-left: 166px;
  gap: 24px;

  a {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.17;
  }

  a.active {
    opacity: 1;
  }

  @media (max-width: 768px) {
    margin: 40px auto 0;
    justify-content: center;

    a {
      width: 10px;
      height: 10px;
    }
  }

  @media (max-width: 425px) {
    order: 1;
    margin: 0 auto 32px;
  }
`;