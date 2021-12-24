import Head from 'next/head';
import PropTypes from 'prop-types';
import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';

const DefaultLayout = ({ children }) => (
  <>
    <Head>
      <title>Popular Github Repositories</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <Navbar />

    <div className="mt-7 flex lg:justify-center overflow-x-scroll overflow-hidden">
      {children}
    </div>
  </>
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
