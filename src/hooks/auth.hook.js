import firebase from 'firebase';
import { useAuth as useAuthFB, useUser } from 'reactfire';

const getProvider = (social) => {
  switch (social){
    case 'facebook':
      return new firebase.auth.FacebookAuthProvider();
    case 'twitter':
      return new firebase.auth.TwitterAuthProvider();
    case 'google':
    default:
      return new firebase.auth.GoogleAuthProvider();
  }
}

const useAuth = () => {
  const { data: user } = useUser();
  const authFB = useAuthFB();

  const setAuth = async (social) => {
    await authFB.signInWithPopup(getProvider(social));
  };

  return {
    user,
    signIn: setAuth,
    signOut: authFB.signOut
  }
};

export default useAuth;
