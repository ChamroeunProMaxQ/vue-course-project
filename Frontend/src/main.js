import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseContainer from './components/UI/BaseContainer.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue'

const app = createApp(App);

app.component('BaseContainer', BaseContainer)
app.component('BaseButton', BaseButton)
app.component('BaseDialog',BaseDialog)

app.use(store);
app.use(router);
app.mount('#app')
