import axios from "axios";

export default {
  async getCoachAction(context) {
    const res = await axios.get(`${import.meta.env.VITE_API_HOST}/coach`);
    context.commit("getCoach", res.data);
  },
  async getAreaAction(context) {
    const res = await axios.get(`${import.meta.env.VITE_API_HOST}/area`);
    context.commit("getArea", res.data);
  },
  async getRequestAction(context) {
    const res = await axios.get(`${import.meta.env.VITE_API_HOST}/request`);
    context.commit("getRequest", res.data);
  },
  async addRequestAction(context, payload) {
    const res = await axios.post(
      `${import.meta.env.VITE_API_HOST}/request`,
      payload
    );
    context.commit("addRequest", res.data);
  },
};
