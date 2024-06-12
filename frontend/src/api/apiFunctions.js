// import dayjs from "dayjs";
import axios from "axios";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const getAllProperties = async () => {
  try {
    const res = await api.get("/residency/all", {
      timeout: 10 * 1000,
    });
    if (res.status === 500 || res.status === 400) throw res.data;
    return res.data;
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
    throw error;
  }
};

export const getProperty = async (propertyID) => {
  try {
    const res = await api.get(`/residency/${propertyID}`, {
      timeout: 10 * 1000,
    });
    if (res.status === 500 || res.status === 400) throw res.data;
    return res.data;
  } catch (error) {
    console.log(error);
    if (error.response && error.response.status === 404) {
      toast.error("Residency not found");
    } else {
      toast.error(error.message || "An unexpected error occurred");
    }
    throw error;
  }
};
