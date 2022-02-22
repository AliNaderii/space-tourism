// TOOLS
import { NavLink } from 'react-router-dom';
// STYLES
import { Container, ContentContainer, Description, Tabs, Info } from '../styles/Destination.styled';
// COMPORNENTS
import Navbar from '../components/Navbar';
import Title from '../components/Title';
// IMAGES
import Moon from '../assets/destination/image-moon.png';

export default function Destination() {
  return (
    <Container>
      <Navbar />
      <Title text='PICK YOUR DESTINATION' num='01' />
      <ContentContainer>
        <img src={ Moon } alt="Moon" />
        <Description>
          <Tabs>
            <NavLink to='/destination'>MOON</NavLink>
            <NavLink to='/'>MARS</NavLink>
            <NavLink to='/'>EUROPA</NavLink>
            <NavLink to='/'>TITAN</NavLink>
          </Tabs>
          <h2>MOON</h2>
          <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
          <Info>
            <div>
              <p className='subheading-2'>AVG. DISTANCE</p>
              <p className='subheading-1'>384,400 KM</p>
            </div>
            <div>
              <p className='subheading-2'>EST. TRAVEL TIME</p>
              <p className='subheading-1'>3 DAYS</p>
            </div>
          </Info>
        </Description>
      </ContentContainer>
    </Container>
  );
}