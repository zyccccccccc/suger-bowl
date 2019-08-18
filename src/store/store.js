import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		age: 20,
		data: ''
	},
	mutations: {
		login (state, msg) {
		  	state.data = msg
			console.log(msg)
		},
		numlogin (state, date) {
			state.data = date
			console.log(date)
		},
		changeMenus( state, data){
			state.data = data
		}
	}
})

export default store