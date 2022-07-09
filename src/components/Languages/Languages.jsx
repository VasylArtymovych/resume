import { Box } from 'components/Box';
import { LeftSideList } from 'components/LeftSideList';
import { LeftSideTitle } from 'components/LeftSideTitle';

export const Languages = () => {
  return (
    <Box>
      <LeftSideTitle color="white">LANGUAGES</LeftSideTitle>
      <LeftSideList color="white">
        <li>Ukrainian - Native</li>
        <li>Russian </li>
        <li>English - Intermediate</li>
      </LeftSideList>
    </Box>
  );
};
