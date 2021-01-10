import { firestore } from '../../firebase/firebase'

const getExperiences = async () => {
  const experiencesRef = firestore.collection("experiences")
  const allExperiences = await experiencesRef.get()

  return allExperiences
}

export {
  getExperiences
}
