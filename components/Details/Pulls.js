export const Pulls = ({ list }) => {
  return (
    <table className="table-auto w-100 mt-3">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-2 text-xs text-gray-500">Title</th>
          <th className="px-6 py-2 text-xs text-gray-500">State</th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {list.map((pr) => (
          <tr className="whitespace-nowrap hover:bg-gray-100" key={pr.id}>
            <td className="px-6 py-4 underline">
              <a href={pr.url} target="_blank">
                {pr.title}
              </a>
            </td>
            <td className="px-6 py-4">{pr.state}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
