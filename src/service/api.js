// src/services/api.js
import axios from "axios";

const API_URL = "http://localhost:4000/api";

export const registerUser = (userData) =>
  axios.post(`${API_URL}/register`, userData);
export const loginUser = (userData) => axios.post(`${API_URL}/login`, userData);
export const sendMessage = (messageData) =>
  axios.post(`${API_URL}/messages`, messageData);
export const fetchMessages = (chatId) =>
  axios.get(`${API_URL}/messages/${chatId}`);
