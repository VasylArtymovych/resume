import { Box } from 'components/Box';
import { SecondTitle } from 'components/SecondTitle';
import styled from 'styled-components';

export const Education = () => {
  return (
    <Box mb="30px">
      <SecondTitle>EDUCATION</SecondTitle>
      <ThirdTitle>Ternopil National Economical University</ThirdTitle>
      <SecondText>2003 - 2008 | Ternopil</SecondText>
      <Text>Bachelouros degree in Banking Busines</Text>
      <Text>Master's degree in Economics</Text>
    </Box>
  );
};

const ThirdTitle = styled('h3')`
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

const Text = styled('p')`
  font-size: 12px;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

const SecondText = styled('p')`
  font-size: 10px;
  margin-bottom: 10px;
  color: ${p => p.theme.colors.secondary};
  @media (min-width: 768px) {
    font-size: 12px;
  }
  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;
