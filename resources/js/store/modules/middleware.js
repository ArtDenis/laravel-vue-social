
const state = {
    user: {
        loggedIn: false,
        isSubscribed: false
    },
    token: localStorage.getItem('token' || '')
};

const actions = {

};

const mutation = {

};

const getters = {
    auth(state) {
        return state.user
    },
    loggedIn(state) {
        return state.token == null
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutation,
    getters
}