
import {createApp} from 'vue';
import axios from 'axios';
import App from './vue/app.vue';
import router from './index.js';
const app = createApp(App);
import Icon from 'vue-awesome/components/Icon'
app.component('v-icon', Icon)
app.config.globalProperties.$axios = axios;
app.use(router);
app.mount('#app');