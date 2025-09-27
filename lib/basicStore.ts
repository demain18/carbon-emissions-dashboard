import { create } from "zustand";

interface ModalState {
  modalOpened: boolean;
  toggleModal: () => void;
  postSelected: number;
  selectPost: (num: number) => void;
}
const useModalStore = create<ModalState>((set) => ({
  modalOpened: false,
  postSelected: 0,
  toggleModal: () =>
    set((state) => ({
      modalOpened: !state.modalOpened,
    })),
  selectPost: (num: number) => set({ postSelected: num }),
}));

export default useModalStore;
