import VueRouter from 'vue-router'
import Home from './pages/Home.vue'

export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: "/",
            component: Home
        }
    ]
})