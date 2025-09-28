import { create } from "zustand";

interface ModalState {
  modalOpened: boolean;
  toggleModal: () => void;
  postSelected: number;
  selectPost: (num: number) => void;
  popupOpened: boolean;
  popupIsSuccessfulStyled: boolean;
  togglePopup: (isSuccess: boolean) => void;
}
const useModalStore = create<ModalState>((set) => ({
  modalOpened: false,
  postSelected: 0,
  toggleModal: () =>
    set((state) => ({
      modalOpened: !state.modalOpened,
    })),
  selectPost: (num: number) => set({ postSelected: num }),
  popupOpened: false,
  popupIsSuccessfulStyled: true,
  togglePopup: (isSuccess: boolean) => {
    set({ popupOpened: true, popupIsSuccessfulStyled: isSuccess });
    setTimeout(() => {
      set({ popupOpened: false, popupIsSuccessfulStyled: isSuccess });
    }, 2000);
  },
}));

export default useModalStore;
