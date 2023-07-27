export default {
    getAuth(state, payload) {
        state.token = payload.token;
        state.userId = payload.userId;
    },
    logout(state,payload) {
        
        state.token = payload.token;
        state.userId = payload.userId;
        localStorage.clear();
        payload.router.go(0);
    }
}