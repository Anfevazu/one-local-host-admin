import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useFirestore, useFirestoreDocData } from 'reactfire';

import Layout from './App/Layout';
import useAuth from '../hooks/auth.hook';
import { COLLECTION_FB_HOST } from '../constants/config';

const Home = () => {
  const { user } = useAuth();
  const history = useHistory();
  const hostDadaRef = useFirestore()
    .collection(COLLECTION_FB_HOST)
    .doc(user?.uid);

  const { data: dataHost } = useFirestoreDocData(
    hostDadaRef
  );

  useEffect(() => {
    console.log(user?.uid);
    console.log(dataHost);
    if(dataHost?.NO_ID_FIELD){
      // alert("No está registrado");
      history.replace('/signup');
    }
  }, [dataHost]);

  return (
    <Layout>
      Hola home
    </Layout>
  );
}

export default Home;
