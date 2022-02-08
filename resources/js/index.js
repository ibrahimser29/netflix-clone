import { createRouter , createWebHistory } from "vue-router";
import App from './vue/app.vue';
const routes = [
    {
        path:'/',
        name: 'home',
        component: App
    }
]
export default createRouter({
    history: createWebHistory(),
    routes
}
)