import { storage } from '../../firebase/firebase'

const uploadFile = async (file, path) => {
  const storageRef = storage.ref();
  const imagesProfileRef = storageRef.child(`${path}/${file.name}`);

  return await imagesProfileRef.put(file)
}

export {
  uploadFile
}
