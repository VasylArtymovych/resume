import { Box } from 'components/Box';
import { LeftSideList } from 'components/LeftSideList';
import { LeftSideTitle } from 'components/LeftSideTitle';

export const SoftSkills = () => {
  return (
    <Box mb="25px">
      <LeftSideTitle color="white">SOFT SKILLS</LeftSideTitle>
      <LeftSideList color="white">
        <li>Autgoing</li>
        <li>Responsibility</li>
        <li>Teamwork</li>
        <li>Organization</li>
        <li>Good communicator</li>
      </LeftSideList>
    </Box>
  );
};
