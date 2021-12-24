import { List } from '../../components/List';

import { useEffect, useState } from 'react';

const Favorites = () => {
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

  return (
    <div className="mt-5 w-100 m-auto">
      {favoritesList?.length > 0 ? (
        <List list={favoritesList} />
      ) : (
        <div>You don't have any favorites</div>
      )}
    </div>
  );
};

export default Favorites;
