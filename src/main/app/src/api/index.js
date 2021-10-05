import axios from "axios";

const API = axios.create({ baseURL: '/api/v1' })

// auth

API.interceptors.request.use((req) => {
    const profile = JSON.parse(localStorage.getItem('profile'));
    if(profile) {
        req.headers.Authorization = `Bearer ${profile.access_token}`
    }

    return req;
});

export const login = (formData) => API.post('/login', formData, {
    headers: {
        'Content-Type': 'multipart/form-data'
    },
});

export const register = (formData) => API.post('/register', formData);

// property

export const addProperty = (formData) => API.post('/property/add', formData);

export const getProperties = () => API.get('/property');

export const deleteProperty = (id) => API.delete(`/property/${id}`); 

// tenant

export const addTenant = (formData) => API.post('/tenant/add', formData);
