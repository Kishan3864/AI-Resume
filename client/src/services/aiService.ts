import api from './api';

export const analyzeResume = async (resumeId: string) => {
  const response = await api.post(`/ai/analyze`, { resumeId });
  return response.data;
};

export const generateSummary = async (resumeId: string) => {
  const response = await api.post(`/ai/generate-summary`, { resumeId });
  return response.data;
};

export const improveBulletPoint = async (bulletPoint: string, context?: string) => {
  const response = await api.post(`/ai/improve-bullet-point`, { bulletPoint, context });
  return response.data;
};

export const matchJobDescription = async (resumeId: string, jobDescription: string) => {
  const response = await api.post(`/ai/match-job`, { resumeId, jobDescription });
  return response.data;
};

export const suggestSkills = async (resumeId: string) => {
  const response = await api.post(`/ai/suggest-skills`, { resumeId });
  return response.data;
};

export const generateCoverLetter = async (resumeId: string, jobDescription: string) => {
  const response = await api.post(`/ai/generate-cover-letter`, { resumeId, jobDescription });
  return response.data;
};
