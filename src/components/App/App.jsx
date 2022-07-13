import styled from 'styled-components';
import { About } from 'components/About';
import { Projects } from 'components/Projects';
import { Work } from 'components/Work';
import { Education } from 'components/Education';
import { AddEducation } from 'components/AddEducation';
import { ContactInfo } from 'components/ContactInfo/ContactInfo';
import { TechSkills } from 'components/TechSkills';
import { SoftSkills } from 'components/SoftSkills';
import { Languages } from 'components/Languages';
// import photo from '../../images/IMG_3182.jpeg';
import photo2 from '../../images/photo-yer.jpg';

const App = () => {
  return (
    <Container as="main" display="flex">
      <RightSection as="section">
        <About />
        <Projects />
        <Work />
        <Education />
        <AddEducation />
      </RightSection>
      <LeftSection as="section">
        <ImgWraper>
          <img src={photo2} alt="person" />
        </ImgWraper>
        <ContactInfo />
        <TechSkills />
        <SoftSkills />
        <Languages />
      </LeftSection>
    </Container>
  );
};

export default App;

const Container = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  margin: 0 auto;
  background-color: #ccbcbc;

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 1024px) {
    width: 1000px;
  }
`;

const LeftSection = styled('div')`
  width: 35%;
  padding: 10px;
  background-color: #051822;
  @media (min-width: 768px) {
    padding: 15px;
  }
  @media (min-width: 1024px) {
    padding: 20px;
  }
`;
const RightSection = styled('div')`
  width: 65%;
  padding: 10px;
  @media (min-width: 768px) {
    padding: 20px;
  }
  @media (min-width: 1024px) {
    padding: 30px;
  }
`;

const ImgWraper = styled('div')`
  margin-bottom: 45px;
`;
