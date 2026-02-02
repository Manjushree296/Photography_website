import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    
    if (error.response?.status === 500) {
      console.error('Server Error:', error.response.data);
    }
    
    return Promise.reject(error);
  }
);

// Gallery APIs
export const galleryAPI = {
  getAllImages: (category, page = 1, limit = 12) => {
    const params = { page, limit };
    if (category && category !== 'all') {
      params.category = category;
    }
    return api.get('/gallery', { params });
  },
  
  getImageById: (id) => api.get(`/gallery/${id}`),
  
  getCategories: () => api.get('/gallery/categories'),
  
  getFeaturedImages: () => api.get('/gallery/featured')
};

// Service APIs
export const serviceAPI = {
  getAllServices: () => api.get('/services'),
  
  getServiceBySlug: (slug) => api.get(`/services/${slug}`),
  
  getServiceImages: (slug) => api.get(`/services/${slug}/images`)
};

// Contact APIs
export const contactAPI = {
  submitForm: (data) => api.post('/contacts/submit', data),
  
  getAllContacts: (status, page = 1, limit = 20) => {
    const params = { page, limit };
    if (status) params.status = status;
    return api.get('/contacts/all', { params });
  },
  
  updateContactStatus: (id, status) => 
    api.patch(`/contacts/${id}/status`, { status })
};

export default api;