import { Box } from 'components/Box';
import { SecondTitle } from 'components/SecondTitle';
import styled from 'styled-components';
import { List } from 'components/List';

export const Projects = () => {
  return (
    <Box mb="30px">
      <SecondTitle>PROJECT EXPERIENCE</SecondTitle>
      <List>
        <li>
          Ice-Cream-Shop,
          <Link href="https://vasylartymovych.github.io/team-project/">
            Link
          </Link>
          (HTML, SASS, BEM, JS). A website with a responsive layout, created
          using BEM methodology.
        </li>
        <li>
          FILMOTECA,
          <Link href="https://vasylartymovych.github.io/filmoteka-project/">
            Link
          </Link>
          (HTML, SASS, BEM, JS, REST API, AJAX, Parcel). Aplication for search
          movies, get information about a movie with trailer.
        </li>
      </List>
    </Box>
  );
};

const Link = styled('a')`
  margin: 0 5px;
  color: ${p => p.theme.colors.accent};
`;
