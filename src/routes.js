import VueRouter from 'vue-router'
import Home from './pages/Home.vue'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            component: Home
        }
    ]
})