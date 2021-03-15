import { createStore } from 'vuex'

export default createStore({
  state: {
    bookList:[],
    id:0,
  },
  mutations: {
    setList(state,param){
      state.bookList = param
    },
    setId(state,param){
      state.id = param
    }
  },
  actions: {
  },
  modules: {
  }
})
