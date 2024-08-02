import axios from "axios";

const API_URL = "http://localhost:3001";

export const getCourse = async () => {
  try {
    const response = await axios.get(`${API_URL}/courses`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("error getting courses", error);
    throw error;
  }
};

export const addEnquiry = async () => {
  try {
    const response = await axios.post(`${API_URL}/enquiries`);
    return response.data;
  } catch (error) {
    console.log("Post enquiry error", error);
    throw error;
  }
};

export const getEnquiry = async () => {
  try {
    const response = await axios.get(`${API_URL}/requirements`);
    return response.data;
  } catch (error) {
    console.log("get enquiry error", error);
    throw error;
  }
};
