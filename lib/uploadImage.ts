import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  // the first argument is unique bucket id
  const fileUploaded = await storage.createFile(
    "653e4fdfa402a998faeb",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
