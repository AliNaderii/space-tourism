import styled from 'styled-components';
import HomeBackground from '../assets/home/background-home-desktop.jpg';
import TabletBackground from '../assets/home/background-home-tablet.jpg';
import MobileBackground from '../assets/home/background-home-mobile.jpg';

export const StyledHome = styled.section`
  height: 100vh;
  background: url(${HomeBackground}) no-repeat fixed center;
  background-size: cover;
  display: flex;
  flex-direction: column;

  /* MEDIA QUERY */

  @media (max-width: 768px) {
    align-items: center;
    justify-content: space-between;
    background: url(${TabletBackground}) no-repeat fixed center;
    background-size: cover;
  }

  @media (max-width: 425px) {
    align-items: center;
    justify-content: space-between;
    background: url(${MobileBackground}) no-repeat fixed center;
    background-size: cover;
  }
`;

export const ContentContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-end;
  margin-bottom: 131px;
  margin-top: 251px;


  /* MEDIA QUERY */

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    margin-bottom: 90px;
    gap: 90px;
  }

  @media (max-width: 425px) {
    gap: 81px;
    margin-bottom: 48px;
  }
`;

export const Content = styled.div`
  width: 450px;
  margin-left: 165px;

  h1 {
    margin: 24px 0;
    color: #fff;
  }

  h5 {
    color: ${({ theme }) => theme.colors['Fog']};
  }

  p {
    line-height: 32px;
    color: ${({ theme }) => theme.colors['Fog']};
  }

  /* MEDIA QUERY */
  
  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }

  @media (max-width: 425px) {
    width: 327px;

    h1 {
      margin: 16px 0;
    }

    h5 {
      margin-top: 112px;
    }
  }
`;

export const Button = styled.button`
  width: 274px;
  height: 274px;
  margin-right: 165px;
  margin-left: auto;
  border-radius: 50%;
  background-color: #fff;
  color: ${({ theme }) => theme.colors['Cinder']};
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  letter-spacing: 2px;
  cursor: pointer;

  /* MEDIA QUERY */
  @media (max-width: 768px) {
    width: 242px;
    height: 242px;
    margin: 0 auto;
  }

  @media (max-width: 425px) {
    width: 150px;
    height: 150px;
    font-size: 20px;
    letter-spacing: 1.25px;
  }
`;