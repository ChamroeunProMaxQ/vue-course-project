import { createApp, defineAsyncComponent } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'

const BaseContainer = defineAsyncComponent( () => import('./components/UI/BaseContainer.vue'));
const BaseButton = defineAsyncComponent( () => import('./components/UI/BaseButton.vue'));
const BaseDialog = defineAsyncComponent( () => import('./components/UI/BaseDialog.vue'));


const app = createApp(App);

app.component('BaseContainer', BaseContainer)
app.component('BaseButton', BaseButton)
app.component('BaseDialog',BaseDialog)

app.use(store);
app.use(router);
app.mount('#app')
