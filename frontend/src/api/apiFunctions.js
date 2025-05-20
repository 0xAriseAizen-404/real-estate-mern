import dayjs from "dayjs";
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

export const createUser = async (email, token) => {
  try {
    const res = await api.post(
      "/users/register",
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Ensure correct Authorization header
        },
      }
    );
    toast.success("User registered successfully");
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const bookVisit = async (date, propertyID, email, token) => {
  try {
    await api.post(
      `/users//book-visit/${propertyID}`,
      {
        email,
        date: dayjs(date).format("DD/MM/YYYY"),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const removeBooking = async (id, email, token) => {
  try {
    await api.post(
      `/users/removeBooking/${id}`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something went wrong, Please try again");
    throw error;
  }
};

export const addToFavourites = async (id, email) => {
  try {
    await api.post(`/users/toFav/${id}`, {
      email,
    });
  } catch (error) {
    toast.error("Something went wrong, Please try again");
    throw error;
  }
};

export const getAllFavourites = async (email) => {
  try {
    const res = await api.get("/users/allFavs", { email });
    return res.data;
  } catch (error) {
    toast.error(error.message);
    throw error;
  }
};
