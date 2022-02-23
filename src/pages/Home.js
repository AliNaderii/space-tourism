// TOOLS
import { NavLink } from 'react-router-dom';
// STYLES
import { StyledHome, ContentContainer, Content } from '../styles/Home.styled';
// COMPONENTS
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <StyledHome>
      <Navbar />
      <ContentContainer>
        <Content>
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </Content>
        <NavLink to='/destination/moon'>EXPLOR</NavLink>
      </ContentContainer>
    </StyledHome>
  );
}