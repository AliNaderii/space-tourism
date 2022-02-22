import styled from "styled-components";

export const StyledTitle = styled.h5`
  margin-top: 76px;
  margin-left: 166px;

  span {
    margin-right: 24px;
    opacity: 0.25;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
    margin-left: 39px;
  }

  @media (max-width: 425px) {
    text-align: center;
    margin: 24px 0 32px;
  }
`;