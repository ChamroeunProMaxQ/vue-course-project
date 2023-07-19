export default {
    addRequest(state,payload) {
        state.requests = [...state.requests, payload]
    },
    getCoach(state, payload) {
        state.coaches = payload;
    }
}