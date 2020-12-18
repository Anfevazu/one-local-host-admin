import { firestore } from '../../firebase/firebase'

const saveHoust = ({ additionalUserInfo, user }) => {
  const { profile, isNewUser } = additionalUserInfo
  const { uid } = user

  isNewUser && firestore.collection("houst").doc(uid).set(profile)
    .then(function () {
      console.log("Document successfully written!");
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
}

export {
  saveHoust
}
