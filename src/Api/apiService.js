import app from "./apiClient";
import {  VIEW_RESUME } from "./apiConstants";

// export const login = async (email, password) => {
//   return await app.post(LOGIN, { email, password });
// };

// export const getUserById = async (userId) => {
//   return await app.get(`${GET_USER_BY_ID}/${userId}`);
// };

// export const addUser = async (userData) => {
//   return await app.post(CREATE_USER, userData);
// };


export const view_resume = async (userId) => {
    return await app.get(VIEW_RESUME(userId));
  };import app from "./apiClient";
import { LOGIN } from "./apiConstants";

export const login = async (email, password) => {
  return await app.post(LOGIN, { email, password });
};
