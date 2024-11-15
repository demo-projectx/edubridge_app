import { apiClient } from "./config";

export const updateUserProfile = async (payload) => {
  return await apiClient.post("/users/register", payload);
};
