import { firestore } from '../../firebase/firebase'

const getLanguages = async () => {
  const languagesRef = firestore.collection("languages").doc('lang')

  try {
    const docRef = await languagesRef.get()
    if (docRef.exists) return docRef.data()

    return ("No such document!")
  } catch (error) {
    return ("Error getting document:", error);
  }
}

export {
  getLanguages
}
