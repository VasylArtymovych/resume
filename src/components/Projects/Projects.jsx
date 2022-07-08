import { Box } from 'components/Box';

export const Projects = () => {
  return (
    <Box>
      <h2>PROJECT EXPERIENCE</h2>
      <ul>
        <li>
          Ice-Cream-Shop,
          <a href="https://vasylartymovych.github.io/team-project/">Link</a>
          (HTML, SASS, BEM, JS). A website with a responsive layout, created
          using BEM methodology.
        </li>
        <li>
          FILMOTECA,
          <a href="https://vasylartymovych.github.io/filmoteka-project/">
            Link
          </a>
          (HTML, SASS, BEM, JS, REST API, AJAX, Parcel). Aplication for search a
          movies, get information about a movie with trailer.
        </li>
      </ul>
    </Box>
  );
};
