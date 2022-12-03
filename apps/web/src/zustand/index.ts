import create, { SetState } from "zustand";

interface IState {
  activeSidebar: string;
  setActiveSidebar: (menu: string) => void;
}

const useSidebarStore = create((set: SetState<IState>) => ({
  activeSidebar: "myCloud",
  setActiveSidebar: (menu: string) => set(() => ({ activeSidebar: menu })),
}));

// function Counter() {
//   const count = useStore(state => state.count)
//   return <h1>{count}</h1>
// }

export default useSidebarStore;
