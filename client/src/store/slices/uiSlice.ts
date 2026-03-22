import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  darkMode: boolean;
  sidebarOpen: boolean;
  modalOpen: string | null;
}

const initialState: UIState = {
  darkMode: false,
  sidebarOpen: false,
  modalOpen: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setModalOpen(state, action: PayloadAction<string | null>) {
      state.modalOpen = action.payload;
    },
  },
});

export const { toggleDarkMode, toggleSidebar, setModalOpen } = uiSlice.actions;
export default uiSlice.reducer;
