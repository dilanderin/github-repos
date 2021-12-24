import { Button } from '../Button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const List = ({ list }) => {
  const [favoritesList, setFavoritesList] = useLocalStorage('favoriteRepos');

  // Hook
  function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.log(error);
        return initialValue;
      }
    });

    const setValue = (value) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.log(error);
      }
    };
    return [storedValue, setValue];
  }

  const addToFavorites = (repo) => {
    if (favoritesList.find((item) => item.id === repo.id)) {
      var lists = favoritesList.filter((x) => {
        return x.id != repo.id;
      });

      setFavoritesList([...lists]);
    } else {
      setFavoritesList([...favoritesList, repo]);
    }
  };

  return (
    <table className="table-auto w-100">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-2 text-xs text-gray-500">Name</th>
          <th className="px-6 py-2 text-xs text-gray-500">Language</th>
          <th className="px-6 py-2 text-xs text-gray-500">Owner</th>
          <th className="px-6 py-2 text-xs text-gray-500">Topic</th>
          <th className="px-6 py-2 text-xs text-gray-500">Stars</th>
          <th className="px-6 py-2 text-xs text-gray-500"></th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {list.map((repo) => (
          <tr className="whitespace-nowrap" key={repo.id}>
            <td className="px-6 py-4 underline">
              <a href={repo.html_url} target="_blank">
                {repo.name}
              </a>
            </td>
            <td className="px-6 py-4">{repo.language}</td>
            <td className="px-6 py-4 underline">
              <a href={repo.owner.url} target="_blank">
                {repo.owner?.login}
              </a>
            </td>
            <td className="px-6 py-4">{repo.topics[0]}</td>
            <td className="px-6 py-4">{repo.stargazers_count}</td>
            <td className="px-6 py-4">
              <Link href={`repository/${repo.owner.login}/${repo.name}`}>
                <Button>Details</Button>
              </Link>

              <Button
                onClick={() => addToFavorites(repo)}
                favorite={
                  favoritesList.find((item) => item.id === repo.id)
                    ? true
                    : false
                }
              >
                Favorite
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
