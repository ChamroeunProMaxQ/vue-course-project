import { createStore } from 'vuex'
import getter from './getter.js'
import action from './action.js'
import mutation from './mutation.js'


const store = createStore({
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
        coaches : [
            {
                id: 'c1',
                name : 'Maximilian Schwarzmüller',
                areas : ['a1', 'a2', 'a3'],
                price : 2,
            },
            {
                id: 'c2',
                name : 'Chamroeun KH',
                areas : ['a1', 'a2'],
                price : 3,
            }
        ],
        requests : []
    },
    getters: getter,
    mutations : mutation,
    actions: action
}
)

export default store