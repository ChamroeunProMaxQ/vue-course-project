export default {
    getCoach(state, payload) {
        state.coaches = payload;
    },
    submitCoach(state, payload) {
        state.coaches.shift(payload);
    }
}