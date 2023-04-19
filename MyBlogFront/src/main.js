// import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store';
import '@/assets/icons/iconfont.css';
import '@/assets/common.css';
import api from '@/api';
// import ElementUI from 'element-ui';
// import P5UI from 'p5-ui'
// import 'p5-ui/dist/style.css'

// 应用封装的loading
import Loading from '@/components/Loading/index';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Loading);
// Vue.use(ElementUI);
// Vue.use(P5UI);
Vue.config.productionTip = false;
Vue.use(api);
new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
