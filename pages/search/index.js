import { List } from '../../components/List';
import { Button } from '../../components/Button';
import RepositoryService from '../../services/repos';

import { useEffect, useState } from 'react';

const Search = () => {
  const [searchList, setSearchList] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {}, []);

  const searchRepos = (event) => {
    event.preventDefault();

    RepositoryService.searchRepos(query).then((data) => {
      setSearchList(data);
    });
  };

  return (
    <div className="mt-5 w-100 m-auto">
      <div className="flex mb-5 w-full">
        <form className="flex w-full" onSubmit={searchRepos}>
          <input
            type="search"
            id="search"
            className="bg-gray-50 mr-3 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Search repositories"
            required
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button type="submit">Search</Button>
        </form>
      </div>

      {searchList.length > 0 ? (
        <List list={searchList} />
      ) : (
        <div>No result found</div>
      )}
    </div>
  );
};

export default Search;
