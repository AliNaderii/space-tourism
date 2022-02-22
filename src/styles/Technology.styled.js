import styled from "styled-components";
import DesktopBackground from '../assets/technology/background-technology-desktop.jpg';
import TabletBackground from '../assets/technology/background-technology-tablet.jpg';
import MobileBackground from '../assets/technology/background-technology-desktop.jpg';

export const Container = styled.div`
  height: 100vh;
  background: url(${DesktopBackground}) no-repeat fixed center;
  background-size: cover;
  overflow: auto;

  @media (max-width: 768px) {
    background: url(${TabletBackground}) no-repeat fixed center;
    background-size: cover;
  }

  @media (max-width: 768px) {
    background: url(${MobileBackground}) no-repeat fixed center;
    background-size: cover;
  }
`;


export const ContentContainer = styled.section`
  display: flex;
  align-items: center;
  margin-top: 26px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 97px;

    img {
      order: 1;
      margin-top: 60px;
      margin-bottom: 56px;
      width: 100%;
    }
  }

  @media (max-width: 425px) {
    text-align: center;
    margin-bottom: 54px;

    img {
      height: 170px;
      margin-top: 0;
      margin-bottom: 34px;
      width: 100%;
    }
  }
`;


export const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 165px;
  gap: 32px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.25);
    font-family: 'Bellefair', serif;
    font-size: 32px;
    color: #fff;
  }

  a.active {
    background-color: #fff;
    color: ${({ theme }) => theme.colors['Cinder']};
    border: 1px solid ${({ theme }) => theme.colors['Cinder']};
  }

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 16px;
    justify-content: center;
    margin-left: 0;
    order: 2;

    a {
      width: 58px;
      height: 58px;
    }
  }

  @media (max-width: 425px) {
    a {
      width: 40px;
      height: 40px;
      font-size: 16px;
    }
  }
`;


export const Description = styled.article`
  margin-left: 80px;
  margin-right: 130px;

  h5 {
    font-size: 16px;
  }

  h3 {
    margin: 11px 0 17px;
  }

  p {
    color: ${({ theme }) => theme.colors['Fog']};
    line-height: 32px;
  }

  @media (max-width: 768px) {
    order: 3;
    text-align: center;
    margin: 44px 155px 0;

    h3 {
      margin: 16px 0;
    }

    p {
      line-height: 28px;
    }
  }

  @media (max-width: 425px) {
    margin: 26px 24px 0;

    h3 {
      margin-top: 9px;
    }
  }
`;