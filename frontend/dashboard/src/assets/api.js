import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const fetchDepartments = () => axios.get(`${BASE_URL}/departments`)
export const fetchCityBudget = () => axios.get(`${BASE_URL}/cityBudget`)
export const fetchServices = () => axios.get(`${BASE_URL}/services`)
export const fetchServiceRequests = () => axios.get(`${BASE_URL}/serviceRequests`)
export const fetchEnergyConsumption = () => axios.get(`${BASE_URL}/energyConsumption`)