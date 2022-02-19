import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 18px;
    background-color: #0b0d17;
    color: #fff;
  }

  h1, h2, h3, h4, h5, .subheading-1, .subheading-2 {
    font-style: normal;
    font-weight: normal;
  }

  h1 {
    font-family: 'Bellefair', serif;
    font-size: 150px;
  }

  h2 {
    font-family: 'Bellefair', serif;
    font-size: 100px;
  }

  h3 {
    font-family: 'Bellefair', serif;
    font-size: 56px;
  }

  h4 {
    font-family: 'Bellefair', serif;
    font-size: 32px;
  }

  h5 {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 28px;
    letter-spacing: 4.75px;
  }

  .subheading-1 {
    font-family: 'Bellefair', serif;
    font-size: 28px;
  }

  .subheading-2 {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 14px;
    letter-spacing: 2.35px;
  }

  .nav-text {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16px;
    letter-spacing: 2.7px;
  }

  ul, li {
    list-style-type: none;
  }

  button {
    border: none;
    background-color: unset;
  }
`;