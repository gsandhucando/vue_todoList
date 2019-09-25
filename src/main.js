import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//like react.dom rendering the main app compontent entry point
new Vue({
  render: h => h(App),
}).$mount('#app')
