import { Box } from 'components/Box';
import { About } from 'components/About';
import { Projects } from 'components/Projects';
import { Work } from 'components/Work';
import { Education } from 'components/Education';
import { AddEducation } from 'components/AddEducation';
import { ContactInfo } from 'components/ContactInfo/ContactInfo';

const App = () => {
  return (
    <Box>
      <Box>
        <About />
        <Projects />
        <Work />
        <Education />
        <AddEducation />
      </Box>
      <Box>
        <div>
          <img src="#" />
        </div>
        <ContactInfo />
      </Box>
    </Box>
  );
};

export default App;
