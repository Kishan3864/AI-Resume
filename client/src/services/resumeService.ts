import api from './api';

export const getResumes = async () => {
  const response = await api.get('/resumes');
  return response.data;
};

export const getResume = async (id: string) => {
  const response = await api.get(`/resumes/${id}`);
  return response.data;
};

export const createResume = async (data: Record<string, unknown>) => {
  const response = await api.post('/resumes', data);
  return response.data;
};

export const updateResume = async (id: string, data: Record<string, unknown>) => {
  const response = await api.put(`/resumes/${id}`, data);
  return response.data;
};

export const deleteResume = async (id: string) => {
  const response = await api.delete(`/resumes/${id}`);
  return response.data;
};

export const duplicateResume = async (id: string) => {
  const response = await api.post(`/resumes/${id}/duplicate`);
  return response.data;
};

export const downloadPDF = async (id: string) => {
  const response = await api.get(`/resumes/${id}/pdf`, {
    responseType: 'blob',
  });
  return response.data;
};
