import styled from 'styled-components';

export const StyledHome = styled.section`
  height: 100vh;
  background: url('/assets/home/background-home-desktop.jpg') no-repeat fixed center;
  background-size: cover;
  overflow: auto;

  /* MEDIA QUERY */

  @media (max-width: 1200px) {
    background: url('/assets/home/background-home-tablet.jpg') no-repeat fixed center;
    background-size: cover;
  }

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: url('/assets/home/background-home-mobile.jpg') no-repeat fixed center;
    background-size: cover;
  }
`;

export const ContentContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-end;
  margin-bottom: 131px;
  margin-top: 251px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
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
    
    &:hover {
      outline: 100px solid rgba(255, 255, 255, 0.1);
    }
  } 

  /* MEDIA QUERY */

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 90px;
    margin-top: 106px;
    gap: 90px;

    a {
      width: 242px;
      height: 242px;
      margin: 0 auto;

      &:hover {
      outline: 65px solid rgba(255, 255, 255, 0.1);
    }
    }
  }

  @media (max-width: 425px) {
    flex-direction: column;
    margin-bottom: 48px;
    margin-top: 0;
    height: 100%;

    a {
      width: 150px;
      height: 150px;
      font-size: 20px;
      letter-spacing: 1.25px;
    }
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
  
  @media (max-width: 1200px) {
    margin-left: 0;
    text-align: center;
  }

  @media (max-width: 425px) {
    width: 327px;

    h1 {
      margin: 16px 0;
    }

    h5 {
      margin-top: 45px;
    }
  }
`;
