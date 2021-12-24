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
    <div className="mt-5 w-100 m-auto">
      {popularRepos.length > 0 && !loading ? (
        <List list={popularRepos} />
      ) : (
        <div>No result found</div>
      )}

      {error && <div>Something happened. {error}</div>}

      {loading && <div>Loading...</div>}
    </div>
  );
};

export default Home;
