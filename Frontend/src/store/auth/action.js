import axios from "axios";

export default {
    
  async getAuthAction(context, payload) {
    let url = `${import.meta.env.VITE_API_HOST}/auth/sign-up`;
    if (payload.mode === "login") {
      url = `${import.meta.env.VITE_API_HOST}/auth/sign-in`;
    }

    try {
      const res = await axios.post(url, {
        email: payload.email,
        password: payload.password,
      });

      localStorage.setItem('access_token', res.data.access_token);
      localStorage.setItem('userId', res.data.user.id);

      context.commit("getAuth", {
        token: res.data.access_token,
        userId: res.data.user.id,
      });
    } catch (error) {
      console.log(error) 
      throw new Error(error.request.responseText);
    }
  },
};
