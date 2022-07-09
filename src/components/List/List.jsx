import styled from 'styled-components';

export const List = styled('ul')`
  list-style-position: inside;
  font-size: 12px;
  color: ${p => p.color || p.theme.colors.text};
  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }

  & li:not(:last-child) {
    margin-bottom: ${p => p.mb || '10px'};
  }
`;
