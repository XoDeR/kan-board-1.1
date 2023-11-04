import Board from "@/components/Board";
import Header from "@/components/Header";

import Login from "@/components/Login";

import { useStore } from "@/store/UserStore";
import { account } from "@/appwrite";
import { GetServerSidePropsContext } from "next";

export default function Home() {
  const { setUser } = useStore();
  setUser(user);

  const useLogin = true;
  if (useLogin) {
    return <Login />;
  }

  return (
    <main>
      {/* Header */}
      <Header />
      {/* Board */}
      <Board />
    </main>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let user = null;

  try {
    // Fetch the user data on the server side
    user = await account.get();
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      user,
    },
  };
}
