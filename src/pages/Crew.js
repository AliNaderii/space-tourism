// TOOLS
import { NavLink } from 'react-router-dom';
// STYLES
import { Container, ContentContainer, Description, Info, Tabs, ImageSection } from '../styles/Crew.styled';
// COMPONENTS
import Navbar from '../components/Navbar';
import Title from '../components/Title';
// IMAGE
import Image from '../assets/crew/image-douglas-hurley.png';

export default function Crew() {
  return (
    <Container>
      <Navbar />

      <ContentContainer>

        <Description>
          <Title text='MEET YOUR CREW' num='02' />
          <Info>
            <h4>COMMANDER</h4>
            <h3>Douglas Hurley</h3>
            <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
          </Info>
          <Tabs>
            <NavLink to='/crew'></NavLink>
            <NavLink to='/'></NavLink>
            <NavLink to='/'></NavLink>
            <NavLink to='/'></NavLink>
          </Tabs>
        </Description>

        <ImageSection>
          <Title text='MEET YOUR CREW' num='02' />
          <img src={ Image } alt="crew" />
        </ImageSection>

      </ContentContainer>
    </Container>
  );
}