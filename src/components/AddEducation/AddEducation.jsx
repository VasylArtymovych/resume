import { Box } from 'components/Box';
import { SecondTitle } from 'components/SecondTitle';
import { ThirdTitle } from 'components/Work/Work';
import styled from 'styled-components';

export const AddEducation = () => {
  return (
    <Box>
      <SecondTitle>ADDITIONAL EDUCATION</SecondTitle>

      <p>2017 - 2018</p>
      <Text>Blockchain technology and cryptocurrency</Text>
      <ThirdTitle>
        IT School <span>GoIT</span>{' '}
      </ThirdTitle>
      <p>2021 - 2022</p>
      <Text>Full Stack Developer</Text>
    </Box>
  );
};

const Text = styled('p')`
  font-size: 12px;
  font-weight: 500;
  margin-top: 7px;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;
