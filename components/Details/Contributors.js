export const Contributors = ({ list }) => {
  return (
    <table className="table-auto w-100 mt-3">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-2 text-xs text-gray-500">Avatar</th>
          <th className="px-6 py-2 text-xs text-gray-500">Name</th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {list.map((item) => (
          <tr className="whitespace-nowrap hover:bg-gray-100" key={item.id}>
            <td className="px-6 py-4 ">
              <img src={item.avatar_url} alt="avatar" className="w-32 h-32" />
            </td>
            <td className="px-6 py-4 underline">
              <a href={item.url} target="_blank">
                {item.login}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
