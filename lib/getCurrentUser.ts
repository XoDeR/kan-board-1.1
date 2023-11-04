import { account } from "@/appwrite";

export const getCurrentUser = async () => {
  try {
    const response = await account.get();
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
