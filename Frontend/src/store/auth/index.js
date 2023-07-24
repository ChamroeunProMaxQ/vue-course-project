import getter from "./getter"
import mutation from "./mutation"
import action from "./action"


const authModule = {
    state() {
        return {
            userId : null,
            token : null,
        }
    },
    getters : getter,
    mutations : mutation,
    actions : action,
}

export default authModule;