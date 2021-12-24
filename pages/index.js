import { List } from '../components/List';

import { useSelector, useDispatch } from 'react-redux';
import { loadPopularRepos } from '../store/repository/actions';

import { useEffect } from 'react';

const Home = () => {
  const dispatch = useDispatch();

  const {
    repository: { popularRepos, error, loading },
  } = useSelector(({ repository }) => ({ repository }));

  useEffect(() => {
    dispatch(loadPopularRepos());
  }, []);

  return (
    <>
      {popularRepos.length > 0 && !loading ? (
        <List list={popularRepos} />
      ) : (
        <div>No result found</div>
      )}

      {error && <div>Something happened. {error}</div>}

      {loading && <div>Loading...</div>}
    </>
  );
};

export default Home;
