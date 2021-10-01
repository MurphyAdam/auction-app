import api from './api';

export const fetchCurrentUserService = () => api(`/security/current_user/`);
export const loginService = formData => api.post(`/auth/login/`, {...formData});
