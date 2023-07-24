import axios from "axios";


export default {
    async getCoachAction(context) {
        const res = await axios.get(`${import.meta.env.VITE_API_HOST}/coach`);
        context.commit("getCoach", res.data);
      },
      async submitCoachAction(context, payload) {
        try {
          const res = await axios.post(`${import.meta.env.VITE_API_HOST}/coach`, payload,{
            headers : {
              Authorization : "Bearer " + localStorage.getItem("access_token")
            }
          });
          context.commit("submitCoach", {
            ...res.data,
          });
        }catch (err) {
          throw new Error(err.request.responseText);
        }
      }
}