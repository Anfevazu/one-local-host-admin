import { firestore } from "../../firebase"
import "firebase/firestore"

export default guest = async () => {
  const docRef = firestore.db("one-local-host").doc("guest")

  const { data } = await docRef.get()

  return data
}
