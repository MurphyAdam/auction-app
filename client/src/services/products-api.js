import api from './api';

export const fetchProductsService = q => api(`/products`, { params: q });
export const fetchCategoriesService = q => api(`/categories`);
export const fetchProductByIdService = id => api(`/products/${id}`);
export const fetchProductBySlugService = slug => api(`/products/${slug}`);
export const makeBidService = params => api.post(`/bids`, params);
