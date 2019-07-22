import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    items:[

    ],
    status: 0
  },
  mutations: {
      addItems (state,item) {
        state.items.push(item);
      },
      changeContent (state,id,name) {
          state.items[id].name=name;

      },
      changeStatus (state,status) {
        state.status=status;
      },
      changeEditFlag (state,id){
        state.items[id].editFlag=false;
      },
      enterClick (state,id){
        state.items[id].editFlag=true;
      }
  }
});

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
