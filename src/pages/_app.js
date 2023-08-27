'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import styles from '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { GlobalStateProvider } from '../context/GlobalState';
import { useGlobalState } from '../context/GlobalState';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <GlobalStateProvider>
      <div className={styles.myGlobalStyles}>
<Component {...pageProps} /></div>
    </GlobalStateProvider>
  );
  return ;
}
export default MyApp;