import { useSelector, useDispatch } from 'react-redux';

import {
  auth,
  facebookAuthProvider,
  githubAuthProvider,
  googleAuthProvider,
  twitterAuthProvider
} from "../firebase/firebase";
import { getAction } from '../util/redux';
import { AUTH_IN, AUTH_OUT } from 'constants/ActionTypes';

const signOutRequest = async () =>
  await  auth.signOut()
    .then(authUser => authUser)
    .catch(error => error);


const signInUserWithGoogleRequest = async () =>
  await  auth.signInWithPopup(googleAuthProvider)
    .then(authUser => authUser)
    .catch(error => error);

const signInUserWithFacebookRequest = async () =>
  await  auth.signInWithPopup(facebookAuthProvider)
    .then(authUser => authUser)
    .catch(error => error);

const signInUserWithGithubRequest = async () =>
  await  auth.signInWithPopup(githubAuthProvider)
    .then(authUser => authUser)
    .catch(error => error);

const signInUserWithTwitterRequest = async () =>
  await  auth.signInWithPopup(twitterAuthProvider)
    .then(authUser => authUser)
    .catch(error => error);

export const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const setAuth = (data) => dispatch(getAction(AUTH_IN, data));

  return {
    auth,
    signInWithGoogle
  }
};

export const useLogout = () => {
  const dispatch = useDispatch();
  const setLogout = () => dispatch(getAction(AUTH_OUT));
  return setLogout;
};
