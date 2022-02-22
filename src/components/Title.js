// STYLES
import { StyledTitle } from "../styles/Title.styled";

export default function Title({ text, num }) {
  return (
    <StyledTitle><span>{ num }</span> { text }</StyledTitle>
  );
}