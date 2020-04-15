import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRepositoryNames } from '../actions';

const Home = ({ repositoryNames, getRepositoryNames }) => {
  useEffect(() => {
    if (!repositoryNames) {
      getRepositoryNames();
    }
  }, []);

  return  (
    <ul>
      {repositoryNames && repositoryNames.map((repo) => (
        <li key={repo.id}>
          {repo.name}
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = ({ repositoryNames }) => ({
  repositoryNames,
});

const mapDispatchToProps = (dispatch) => ({
  getRepositoryNames: () => dispatch(getRepositoryNames()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
