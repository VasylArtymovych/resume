import { Box } from 'components/Box';
import { LeftSideTitle } from 'components/LeftSideTitle';
import styled from 'styled-components';

export const ContactInfo = () => {
  return (
    <Box display="flex" flexDirection="column" mb="25px" flexWrap="wrap">
      <LeftSideTitle color="white">CONTACT INFORMATION</LeftSideTitle>
      <Text>+38(099)398-76-19</Text>
      <Link href="art777vasss@gmail.com">art777vasss@gmail.com</Link>
      <Link href="https://www.linkedin.com/feed/">
        https://www.linkedin.com/feed/
      </Link>
      <Link href="https://github.com/VasylArtymovych">
        https://github.com/VasylArtymovych
      </Link>
    </Box>
  );
};

const Link = styled('a')`
  font-size: 6px;
  margin-bottom: 5px;
  color: ${p => p.theme.colors.accent};
  @media (min-width: 768px) {
    font-size: 12px;
  }
  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;

const Text = styled('p')`
  font-size: 12px;
  color: white;
  margin-bottom: 5px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;
