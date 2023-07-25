import axios from "axios";

export default {

  async getAreaAction(context) {
    const res = await axios.get(`${import.meta.env.VITE_API_HOST}/area`);
    context.commit("getArea", res.data);
  },
  async getRequestAction(context) {
    const res = await axios.get(`${import.meta.env.VITE_API_HOST}/request`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    context.commit("getRequest", res.data);
  },
  async addRequestAction(context, payload) {
    const res = await axios.post(
      `${import.meta.env.VITE_API_HOST}/request`,
      payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    context.commit("addRequest", res.data);
  },
};
