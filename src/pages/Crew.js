// TOOLS
import { NavLink, useParams } from 'react-router-dom';
// STYLES
import { Container, ContentContainer, Description, Info, Tabs, ImageSection } from '../styles/Crew.styled';
// COMPONENTS
import Navbar from '../components/Navbar';
import Title from '../components/Title';
// DATA
import data from '../data.json';

export default function Crew() {
  const name = useParams().name;
  const crew = data.crew.filter(
    member => member.name.toLowerCase() === name.replace('-', ' ')
  );
  return (
    <Container>
      <Navbar />

      <ContentContainer>

        <Description>
          <Title text='MEET YOUR CREW' num='02' />
          <Info>
            <h4>{ crew[0].role }</h4>
            <h3>{ crew[0].name }</h3>
            <p>{ crew[0].bio }</p>
          </Info>
          <Tabs>
            <NavLink to='/crew/douglas-hurley'></NavLink>
            <NavLink to='/crew/mark-shuttleworth'></NavLink>
            <NavLink to='/crew/victor-glover'></NavLink>
            <NavLink to='/crew/anousheh-ansari'></NavLink>
          </Tabs>
        </Description>

        <ImageSection>
          <Title text='MEET YOUR CREW' num='02' />
          <img src={ crew[0].images.png } alt="crew" />
        </ImageSection>

      </ContentContainer>
    </Container>
  );
}