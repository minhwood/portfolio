import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './routes'
import './statics/core.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faInfo, faHighlighter, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithubSquare, faFacebookSquare  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueNesCss from 'vuenes.css'

export const bus = new Vue()
library.add(faBars, faInfo, faHighlighter, faPlus, faMinus, faLinkedin, faGithubSquare, faFacebookSquare)
Vue.use(VueRouter, BootstrapVue)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(VueNesCss)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')