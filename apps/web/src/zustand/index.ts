import create, { SetState } from "zustand";

interface IWorldIdData {
  merkle_root: string;
  nullifier_hash: string;
  proof: string;
}
interface IState {
  activeSidebar: string;
  setActiveSidebar: (menu: string) => void;
  worldIdData: IWorldIdData;
  setWorldIdData: (data: any) => void;
}

const useAppStore = create((set: SetState<IState>) => ({
  activeSidebar: "myCloud",
  setActiveSidebar: (menu: string) => set(() => ({ activeSidebar: menu })),
  worldIdData: {
    merkle_root: "",
    nullifier_hash: "",
    proof: "",
  },
  setWorldIdData: (data: IWorldIdData) => set(() => ({ worldIdData: data })),
}));

// function Counter() {
//   const count = useStore(state => state.count)
//   return <h1>{count}</h1>
// }

export default useAppStore;
