import { create } from "zustand";

interface ModalState {
  modalOpened: boolean;
  toggleModal: () => void;
}
const useModalStore = create<ModalState>((set) => ({
  modalOpened: false,

  toggleModal: () =>
    set((state) => ({
      modalOpened: !state.modalOpened,
    })),
}));

export default useModalStore;
