import { createStore } from 'vuex'
import getter from './getter.js'
import action from './action.js'
import mutation from './mutation.js'
import authModule from './auth/index.js'
import coachModule from './coach/index.js'


const store = createStore({
    modules: {
        auth: authModule,
        coach: coachModule
    },
    state: {
        areas : [
            {
                id: 'a1',
                name : 'Frontend',
            },
            {
                id: 'a2',
                name : 'Backend',
            },
            {
                id: 'a3',
                name : 'Career',
            },
        ],
        requests : []
    },
    getters: getter,
    mutations : mutation,
    actions: action
}
)

export default store