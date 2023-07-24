export default {
    getUserAuth(state) {
        return state.userId || localStorage.getItem('userId');
    }
}