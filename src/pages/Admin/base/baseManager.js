import { axiosInstance } from "../axiosInstance";

const baseManager = {
  getAll: async (url) => {
    let responseData = [];

    try {
      const res = await axiosInstance.get(url);
      responseData = res.data;
    } catch (err) {
      console.log(err);
    }
  },
};
