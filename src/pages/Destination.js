// TOOLS
import { NavLink, useParams } from 'react-router-dom';
// STYLES
import { Container, ContentContainer, Description, Tabs, Info } from '../styles/Destination.styled';
// COMPORNENTS
import Navbar from '../components/Navbar';
import Title from '../components/Title';
// DATA
import data from '../data.json';

export default function Destination() {
  const name = useParams().name;
  const destination = data.destinations.filter(
    dest => dest.name.toLowerCase() === name
  );

  return (
    <Container>
      <Navbar />
      <Title text='PICK YOUR DESTINATION' num='01' />
      <ContentContainer>
        <img src={ destination[0].images.png } alt="Moon" />
        <Description>
          <Tabs>
            <NavLink to='/destination/moon'>MOON</NavLink>
            <NavLink to='/destination/mars'>MARS</NavLink>
            <NavLink to='/destination/europa'>EUROPA</NavLink>
            <NavLink to='/destination/titan'>TITAN</NavLink>
          </Tabs>
          <h2>{ destination[0].name }</h2>
          <p>{ destination[0].description }</p>
          <Info>
            <div>
              <p className='subheading-2'>AVG. DISTANCE</p>
              <p className='subheading-1'>{ destination[0].distance }</p>
            </div>
            <div>
              <p className='subheading-2'>EST. TRAVEL TIME</p>
              <p className='subheading-1'>{ destination[0].travel }</p>
            </div>
          </Info>
        </Description>
      </ContentContainer>
    </Container>
  );
}