import { Box } from 'components/Box';
import { SecondTitle } from 'components/SecondTitle';
import styled from 'styled-components';

export const Work = () => {
  return (
    <Box mb="30px">
      <SecondTitle>WORK EXPERIENCE</SecondTitle>
      <List>
        <li>
          <ThirdTitle>
            Major economist <span>LLC "AZOT"</span>
          </ThirdTitle>
          <p>October 2007 - May 2011 | Ukraine</p>
        </li>
        <li>
          <ThirdTitle>
            Team-leader <span>Premier Valeting</span>
          </ThirdTitle>
          <p>July 2012 - May 2018 | United Kingdom</p>
        </li>
        <li>
          <ThirdTitle>
            Sales maneger <span>SIA BIAFARMA</span>
          </ThirdTitle>
          <p>July 2019 - May 2020 | Latvia</p>
        </li>
      </List>
    </Box>
  );
};

export const ThirdTitle = styled('h3')`
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1024px) {
    font-size: 20px;
  }

  & span {
    color: ${p => p.theme.colors.accent};
  }
`;

const List = styled('ul')`
  list-style: none;
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }

  & li:not(:last-child) {
    margin-bottom: 10px;
  }

  & p {
    font-size: 10px;
    @media (min-width: 768px) {
      font-size: 12px;
    }
    @media (min-width: 1024px) {
      font-size: 14px;
    }
  }
`;
