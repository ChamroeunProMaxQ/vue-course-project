export default {
  getAreas(state) {
    return state.areas;
  },
  getArea(state) {
    return payload;
  },
  getCoaches(state) {
     return state.coaches;
  },
  getCoachById: (state) => (id) => {
    return state.coaches.find((coach) => coach.id == id);
  },
  getAreaById: (state, getter) => (id) => {
    const areas = getter.getAreas;
    const area = areas.find((area) => area.id === id);
    return area.name;
  },
  getRequests(state) {
    return state.requests;
  },

  getNumberOfRequests(state) {
    return state.requests.length;
  }
};
