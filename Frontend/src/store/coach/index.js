import getter from "./getter"
import mutation from "./mutaion"
import action from "./action"

const coachModule = {
    state () {
        return {
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
        }
    },
    getters : getter,
    mutations : mutation,
    actions : action
}

export default coachModule