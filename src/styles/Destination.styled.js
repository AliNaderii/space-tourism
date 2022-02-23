import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 0 0 112px 0px;
  background: url('/assets/destination/background-destination-desktop.jpg') no-repeat fixed center;
  background-size: cover;
  overflow: auto;

  /* MEDIA QUERY */

  @media (max-width: 1200px) {
    padding: 0 0 62px 0px;
    background: url('/assets/destination/background-destination-tablet.jpg') no-repeat fixed center;
    background-size: cover;
    text-align: center;
  }

  @media (max-width: 425px) {
    padding: 0 0 58px 0px;
    background: url('/assets/destination/background-destination-mobile.jpg') no-repeat fixed center;
    background-size: cover;
  }
`;

export const ContentContainer = styled.section`
  margin: 64px 163px 0 230px;
  display: flex;

  @media (max-width: 1200px) {
    flex-direction: column;
    margin: 60px 98px 62px;
    align-items: center;

    img {
      width: 300px;
      height: 300px;
    }
  }

  @media (max-width: 425px) {
    margin: 32px 24px 0px;

    img {
    width: 170px;
    height: 170px;
    }
  }
`;

export const Description = styled.article`
  width: 100%;
  margin-left: 157px;

  h2 {
    margin: 37px 0 14px 0;
  }

  p {
    line-height: 32px;
    color: ${({ theme }) => theme.colors['Fog']};
    width: 100%;
  }

  @media (max-width: 1200px) {
    margin: 53px auto 0;
    text-align: center;

    h2 {
      font-size: 80px;
      margin: 32px 0 8px;
    }

    p {
      line-height: 28px;
    }
  }

  @media (max-width: 425px) {
    margin: 26px auto 0;
    text-align: center;

    h2 {
      font-size: 56px;
      margin: 20px 0 1px;
    }

    p {
      line-height: 25px;
    }
  }
`;

export const Tabs = styled.ul`
  display: flex;
  gap: 35px;
  
  a {
    color: #fff;
    font-size: 16px;
    letter-spacing: 2.7px;
  }

  a:hover {
    color: ${({ theme }) => theme.colors['Fog']};
    border-bottom: 3px solid rgba(255, 255, 255, 0.5);
  }

  a.active {
    border-bottom: 3px solid #fff;
    padding-bottom: 11px;
  }

  @media (max-width: 1200px) {
    justify-content: center;
  }

  @media (max-width: 425px) {

    a {
      font-size: 14px;
    }
  }
`;

export const Info = styled.div`
  border-top: 1px solid #383B4B;
  padding-top: 28px;
  margin-top: 54px;
  display: flex;
  align-items: center;

  p {
    display: inline-block;
    color: #fff;
  }

  @media (max-width: 1200px) {
    margin-top: 49px;
    justify-content: center;
  }

  @media (max-width: 1200px) {
    margin-top: 32px;
    flex-direction: column;
    padding-top: 32px;
    gap: 32px;
  }
`;