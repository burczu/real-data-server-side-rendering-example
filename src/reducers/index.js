function reducer(state, action) {
  switch (action.type) {
    case 'SET_REPOSITORY_NAMES':
      return { ...state, repositoryNames: action.payload };
    default:
      return { ...state };
  }
}

export default reducer;
