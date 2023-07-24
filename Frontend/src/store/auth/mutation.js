export default {
    getAuth(state, payload) {
        state.token = payload.token;
        state.userId = payload.userId;
    },
    logout(state) {
        state.token = null;
        state.userId = null;

        localStorage.clear();
        this.$router.refresh();
    }
}