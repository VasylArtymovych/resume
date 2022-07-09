import styled from 'styled-components';

export const LeftSideTitle = styled('h2')`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 10px;
  color: ${p => p.color || p.theme.colors.white};
  @media (min-width: 768px) {
    font-size: 26px;
  }
  @media (min-width: 1024px) {
    font-size: 28px;
  }
`;
