import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//安装配置mintui
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

Vue.config.productionTip = false

//安装配置axios
import axios from 'axios';
axios.defaults.baseURL="http://localhost:3000";
Vue.prototype.axios=axios;

//引入momentjs
import moment from 'moment'
Vue.prototype.moment=moment;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
