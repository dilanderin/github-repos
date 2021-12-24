import { useState } from 'react';
import { useRouter } from 'next/router';

export const Navbar = ({ query }) => {
  const [activeTab, setActiveTab] = useState();
  const router = useRouter();

  const tabs = [
    { id: 1, text: 'Show Popular Repos', url: '' },
    { id: 2, text: 'Search in Github Repositories', url: 'search' },
    { id: 3, text: 'Favorites List', url: 'favorites' },
  ];
  return (
    <nav className="flex flex-col sm:flex-row mt-5 bg-white border rounded">
      {tabs.map((tab) => (
        <button
          className={`flex-1 py-3 px-4 rounded transition hover:scale-110 ${
            router.pathname === `/${tab.url}` || activeTab === tab.id
              ? 'text-white border-b-2 font-medium border-blue-500 bg-blue-500'
              : 'text-gray-700'
          }`}
          key={tab.id}
          onClick={() => {
            setActiveTab(tab.id);
            router.push(`/${tab.url}`);
          }}
        >
          {tab.text}
        </button>
      ))}
    </nav>
  );
};
