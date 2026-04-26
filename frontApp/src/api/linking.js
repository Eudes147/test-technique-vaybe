import axios from 'axios'


const api = axios.create({
  baseURL: "http://localhost:8000/api" || import.meta.env.VITE_API_URL  
  })


const getAuthHeader = () => ({
    Authorization: `Token ${localStorage.getItem('token')}`
})

export const adminLogin = async (username, password) => {

  const { data } = await api.post('/admin/login/', { username, password }) 
  return data
}

export const adminLogout = () => {
  localStorage.removeItem('token')
}

export const isAuthenticated = () => !!localStorage.getItem('token')

// Soumettre les profils
export const submitApplication = async (formData) => {
  const { data } = await api.post('/applications/', formData)
  return data
}

// Récupérer les profils
export const getApplications = async (filters = {}) => {
  const { data } = await api.get('/applications/', {
    headers: getAuthHeader(),
    params: filters
  })
  return data
}