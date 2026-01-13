import { BASE_URL } from "../baseUrl";

const contact = async () => {
  const response = await BASE_URL.post("/", data);
  return response.data.data;
};

export default contact;
