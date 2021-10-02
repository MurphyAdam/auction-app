import api from './api';

export const updateSettingsService = formData => api.put(`/users/${formData.user_id}`, formData);