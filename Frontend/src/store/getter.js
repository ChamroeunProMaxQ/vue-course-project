export default {
  getAreas(state) {
    return state.areas;
  },
  getArea(state) {
    return payload;
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
