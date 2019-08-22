import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		data: false
	},
	mutations: {
		changeMenus( state, data){
			state.data = data
		}
	}
})

export default store