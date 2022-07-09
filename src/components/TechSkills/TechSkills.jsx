import { Box } from 'components/Box';
import { LeftSideList } from 'components/LeftSideList';
import { LeftSideTitle } from 'components/LeftSideTitle';

export const TechSkills = () => {
  return (
    <Box mb="25px">
      <LeftSideTitle color="white">TECH SKILLS</LeftSideTitle>
      <LeftSideList mb="5px" color="white">
        <li>HTML/CSS/SASS</li>
        <li>Responsive/Adaptive design</li>
        <li>GIT</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>REST API</li>
        <li>Handlebars</li>
        <li>Styled Component</li>
        <li>Styled System</li>
        <li>Parcel</li>
        <li>Webpack</li>
      </LeftSideList>
    </Box>
  );
};
