import { Box } from 'components/Box';
import styled from 'styled-components';
import { SecondTitle } from 'components/SecondTitle';

export const About = () => {
  return (
    <>
      <Box p="10px" mb="25px">
        <MainTitle>Vasyl Artymovych</MainTitle>
        <ThirdTitle>Junior Full-Stack Developer</ThirdTitle>
      </Box>
      <Box mb="30px">
        <SecondTitle>SUMMARY</SecondTitle>
        <Text>
          I am Full-Stack developer looking for a full-time position in a
          company that makes life and business easier, more productive and
          user-friendly. I have knowledge of HTML, CSS, SASS, JavaScript, React
          and TypeScript. Also, i have hands-on experience in following
          Agile/Scrum methodology when working in a team. I am a fast leaner,
          responsible, reliable, cooperative and ready for challenging tasks.
        </Text>
      </Box>
    </>
  );
};

const MainTitle = styled('h1')`
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-size: 44px;
  }
  @media (min-width: 1024px) {
    font-size: 54px;
  }
`;
const ThirdTitle = styled('h1')`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;

  color: ${p => p.theme.colors.primary};
`;

const Text = styled('p')`
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;
