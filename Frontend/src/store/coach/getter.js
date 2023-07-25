export default {
    getCoaches(state) {
      if(localStorage.getItem("userId")){
        return state.coaches.filter(coach => coach.id !== localStorage.getItem("userId"));
      }
        return state.coaches;
     },
     getCoachById: (state) => (id) => {
       return state.coaches.find((coach) => coach.id == id);
     },
     getIsRegistered(state) {
        return state.coaches.find((coach) => coach.id == localStorage.getItem("userId"));
      }
}