import api from './api';

export const login = async (email: string, password: string) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

export const register = async (name: string, email: string, password: string) => {
  const response = await api.post('/auth/register', { name, email, password });
  return response.data;
};

export const logout = async () => {
  const response = await api.post('/auth/logout');
  return response.data;
};

export const getMe = async () => {
  const response = await api.get('/auth/me');
  return response.data;
};

export const googleAuth = async (token: string) => {
  const response = await api.post('/auth/google', { token });
  return response.data;
};

export const githubAuth = async (code: string) => {
  const response = await api.post('/auth/github', { code });
  return response.data;
};
