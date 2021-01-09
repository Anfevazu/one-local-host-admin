import { firestore } from '../../firebase/firebase'

const saveHoust = ({ additionalUserInfo, user }) => {
  const { profile, isNewUser } = additionalUserInfo
  const { uid } = user

  isNewUser && firestore.collection("houst").doc(uid).set({ ...profile, formCompleted: false })
    .then(function () {
      console.log("Document successfully written!");
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
}

const getHoust = async ({uid}) => {
  const houstRef = firestore.collection("houst").doc(uid);

  try {
    const doc = await houstRef.get()
    if (doc.exists) return doc.data()
    // doc.data() will be undefined in this case
    console.log("No such document!");
  } catch (error) {
    console.log("Error getting document:", error);
  }
}

export {
  saveHoust,
  getHoust
}
