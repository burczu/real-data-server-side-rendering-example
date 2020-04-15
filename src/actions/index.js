import axios from 'axios';

export const getRepositoryNames = () => (dispatch) => {
  axios
    .get('https://api.github.com/repositories')
    .then(({ data }) => {
      dispatch({
        type: 'SET_REPOSITORY_NAMES',
        payload: data.map((repo) => ({
          id: repo.id,
          name: repo.name,
        })),
      });
    });
};
