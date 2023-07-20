export default {
    addRequest(state,payload) {
        state.requests = [...state.requests, payload]
    },
    getCoach(state, payload) {
        state.coaches = payload;
    },
    getArea(state, payload) {
        state.areas = payload;
    },
    getRequest(state, payload) {
        state.requests = payload;
    },
}