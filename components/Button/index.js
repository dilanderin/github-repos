import PropTypes from 'prop-types';

export const Button = ({ type, children, favorite, ...others }) => {
  return (
    <button
      type={type}
      {...others}
      className={`mr-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ${
        favorite && 'bg-red-500'
      }`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};
