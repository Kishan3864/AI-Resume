import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ResumeData } from '../../types/template';

interface ResumeState {
  currentResume: ResumeData | null;
  selectedTemplate: string;
  resumes: { id: string; name: string; updatedAt: string; templateId: string }[];
  isSaving: boolean;
  isExporting: boolean;
}

const initialState: ResumeState = {
  currentResume: null,
  selectedTemplate: 'tpl-03',
  resumes: [],
  isSaving: false,
  isExporting: false,
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setCurrentResume(state, action: PayloadAction<ResumeData>) {
      state.currentResume = action.payload;
    },
    setSelectedTemplate(state, action: PayloadAction<string>) {
      state.selectedTemplate = action.payload;
    },
    updatePersonalInfo(state, action: PayloadAction<Partial<ResumeData['personalInfo']>>) {
      if (state.currentResume) {
        state.currentResume.personalInfo = {
          ...state.currentResume.personalInfo,
          ...action.payload,
        };
      }
    },
    setSaving(state, action: PayloadAction<boolean>) {
      state.isSaving = action.payload;
    },
    setExporting(state, action: PayloadAction<boolean>) {
      state.isExporting = action.payload;
    },
    setResumes(state, action: PayloadAction<ResumeState['resumes']>) {
      state.resumes = action.payload;
    },
  },
});

export const {
  setCurrentResume,
  setSelectedTemplate,
  updatePersonalInfo,
  setSaving,
  setExporting,
  setResumes,
} = resumeSlice.actions;

export default resumeSlice.reducer;
