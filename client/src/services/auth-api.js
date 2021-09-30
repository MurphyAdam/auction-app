import api from './api';

export const fetchCurrentUserService = () => api(`/security/current_user/`);
