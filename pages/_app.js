import '../styles/globals.css';
import React from 'react';
import { wrapper } from '../store/store';
import DefaultLayout from '../layouts/DefaultLayout';

const MyApp = ({ Component, pageProps }) => (
  <DefaultLayout>
    <Component {...pageProps} />
  </DefaultLayout>
);

export default wrapper.withRedux(MyApp);
