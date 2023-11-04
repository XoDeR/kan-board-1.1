import create from "zustand";

type State = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const useStore = create<State>((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user })),
}));
