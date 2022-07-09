import styled from 'styled-components';

export const SecondTitle = styled('h2')`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 10px;
  color: ${p => p.color || p.theme.colors.text};
  @media (min-width: 768px) {
    font-size: 28px;
  }
  @media (min-width: 1024px) {
    font-size: 30px;
  }
`;
