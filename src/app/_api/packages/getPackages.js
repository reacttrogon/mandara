import { BASE_URL } from "../baseUrl";

export const getPackages = async () => {
  try {
    const response = await BASE_URL.get("/api/v1/cottage-packages");
    return response.data.data;
  } catch (e) {
    console.error(e);
  }
};
