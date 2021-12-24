import { useSelector, useDispatch } from 'react-redux';
import { loadRepoDetails } from '../../store/repository/actions';
import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Pulls } from '../../components/Details/Pulls';
import { Contributors } from '../../components/Details/Contributors';

const Repository = ({ owner, name }) => {
  const [showPulls, setShowPulls] = useState(false);
  const [showIssues, setShowIssues] = useState(false);
  const [showContributors, setShowContributors] = useState(false);

  const dispatch = useDispatch();
  const {
    repository: { repoDetails, loading, error },
  } = useSelector(({ repository }) => ({ repository }));

  useEffect(() => {
    dispatch(loadRepoDetails(owner, name));
  }, []);

  return (
    <div className="mt-5 w-100 m-auto bg-white p-9 min-w-[50%] overflow-x-scroll">
      {repoDetails ? (
        <div className="flex flex-col bg-white">
          <div className="mb-5">
            <b>Repository: </b> {name}
          </div>
          <div className="flex flex-col py-4 px-5 mb-3 border rounded justify-between">
            <Button onClick={() => setShowPulls(!showPulls)}>
              {showPulls ? 'Hide' : 'Show'} Pull Requests
            </Button>

            {showPulls &&
              (repoDetails?.pulls?.length > 0 ? (
                <Pulls list={repoDetails.pulls} />
              ) : (
                <div>No pull requests</div>
              ))}
          </div>
          <div className="flex flex-col py-4 px-5 mb-3 border rounded justify-between">
            <Button onClick={() => setShowIssues(!showIssues)}>
              {showIssues ? 'Hide' : 'Show'} Issues
            </Button>

            {showIssues &&
              (repoDetails?.issues?.length > 0 ? (
                <Pulls list={repoDetails.issues} />
              ) : (
                <div>No issues</div>
              ))}
          </div>
          <div className="flex flex-col py-4 px-5 mb-3 border rounded justify-between">
            <Button onClick={() => setShowContributors(!showContributors)}>
              {showContributors ? 'Hide' : 'Show'} Contributors
            </Button>

            {showContributors &&
              (repoDetails?.contributors?.length > 0 ? (
                <Contributors list={repoDetails.contributors} />
              ) : (
                <div>No contributors</div>
              ))}
          </div>
        </div>
      ) : (
        <div>No result found</div>
      )}
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const [owner, name] = context.query.slug || [];

  return { props: { owner, name } };
};

export default Repository;
