import styled from 'styled-components';

// CONTAIENER
export const Container = styled.div`
  height: 100vh;
  background: url('/assets/crew/background-crew-desktop.jpg') no-repeat fixed center;
  background-size: cover;
  overflow: auto;

  @media (max-width: 1200px) {
    background: url('/assets/crew/background-crew-tablet.jpg') no-repeat fixed center;
    background-size: cover;
  }

  @media (max-width: 768px) {
    background: url('/assets/crew/background-crew-mobile.jpg') no-repeat fixed center;
    background-size: cover;
  }
`;


// CONTENT CONTAINER
export const ContentContainer = styled.section`
  display: flex;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    gap: 0;
  }

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 0;
  }
`;


// IMAGE SECTION
export const ImageSection = styled.section`
  display: flex;
  margin-top: 62px;
  margin-right: 130px;
  justify-content: center;
  flex-grow: 2;

  h5 {
    display: none;
  }

  @media (max-width: 1200px) {
    margin-right: 0;
    
    img {
      margin-top: 0;
      margin-right: 0;
      margin-left: 5px;
      width: 456px;
      height: 532px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 0;
    order: 1;
    flex-direction: column;
    align-items: center;

    h5 {
      display: block;
      margin: 32px auto 0;
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

  @media (max-width: 1200px) {
    margin-bottom: 40px;

    h5 {
      margin-left: 39px;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 0;
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
    width: 80%;
  }

  @media (max-width: 1200px) {
    margin: 60px 155px 40px;
    justify-content: center;
    text-align: center;

    h3 {
    margin: 8px 0 16px;
    }

    p {
      line-height: 28px;
      width: 80%;
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
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

  a:hover {
    opacity: 0.5;
  }

  a.active {
    opacity: 1;
  }

  @media (max-width: 1200px) {
    margin: 40px auto 0;
    justify-content: center;

    a {
      width: 10px;
      height: 10px;
    }
  }

  @media (max-width: 768px) {
    order: 1;
    margin: 0 auto 32px;
  }
`;