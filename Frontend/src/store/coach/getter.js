export default {
    getCoaches(state) {
        return state.coaches;
     },
     getCoachById: (state) => (id) => {
       return state.coaches.find((coach) => coach.id == id);
     },
}