// STYLES
import { Container, ContentContainer, Tabs, Description } from "../styles/Technology.styled";
// COMPONENTS
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import { NavLink } from "react-router-dom";
// IMAGE
import Image from '../assets/technology/image-launch-vehicle-portrait.jpg';
import LandscapeImage from '../assets/technology/image-launch-vehicle-landscape.jpg';

export default function Technology() {
  return (
    <Container>
      <Navbar />
      <Title text='SPACE LAUNCH 101' num='03' />

      <ContentContainer>
        <Tabs>
          <NavLink to='/technology'>1</NavLink>
          <NavLink to='/'>2</NavLink>
          <NavLink to='/'>3</NavLink>
        </Tabs>
        <Description>
          <h5>THE TERMINOLOGY…</h5>
          <h3>LAUNCH VEHICLE</h3>
          <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
        </Description>
        <picture>
          <source srcSet={ LandscapeImage } media='(max-width: 768px)' />
          <img src={ Image } alt="launch vehicle" />
        </picture>
      </ContentContainer>
    </Container>
  );
}