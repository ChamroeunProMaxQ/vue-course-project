export default {
    addRequest(state,payload) {
        state.requests = [...state.requests, payload]
    },

    getArea(state, payload) {
        state.areas = payload;
    },
    getRequest(state, payload) {
        state.requests = payload;
    },
}