export default {
    addRequest(state,payload) {
        state.requests = [...state.requests, payload]
    },
}