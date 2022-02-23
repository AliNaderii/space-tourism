// TOOLS
import { NavLink, useParams } from "react-router-dom";
// STYLES
import { Container, ContentContainer, Tabs, Description } from "../styles/Technology.styled";
// COMPONENTS
import Navbar from '../components/Navbar';
import Title from '../components/Title';
// DATA
import data from '../data.json';

export default function Technology() {
  const name = useParams().name;
  const tech = data.technology.filter(
    technology => technology.name.toLocaleLowerCase() === name.replace('-', ' ')
  );
  return (
    <Container>
      <Navbar />
      <Title text='SPACE LAUNCH 101' num='03' />

      <ContentContainer>
        <Tabs>
          <NavLink to='/technology/launch-vehicle'>1</NavLink>
          <NavLink to='/technology/spaceport'>2</NavLink>
          <NavLink to='/technology/space-capsule'>3</NavLink>
        </Tabs>
        <Description>
          <h5>THE TERMINOLOGY…</h5>
          <h3>{ tech[0].name.toUpperCase() }</h3>
          <p>{ tech[0].description }</p>
        </Description>
        <picture>
          <source srcSet={ tech[0].images.landscape } media='(max-width: 1200px)' />
          <img src={ tech[0].images.portrait } alt="launch vehicle" />
        </picture>
      </ContentContainer>
    </Container>
  );
}