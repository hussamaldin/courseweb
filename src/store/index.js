import { createStore } from "vuex";

export default createStore({
  state: {
    open:false,
    nav:false,
    nav1:false,
    subcategory: JSON.parse(localStorage.getItem('subcategory')) || null,
    courses: JSON.parse(localStorage.getItem('courses')) || null,
    index: JSON.parse(localStorage.getItem('index')) || null,
    allvideo: JSON.parse(localStorage.getItem('allvideo')) || null,
  },
  mutations: {
    change (state) {
      state.nav= !state.nav
    },
    change1 (state) {
      state.nav1= !state.nav1
    },
    subcategory: (state, payload) => {
      state.subcategory = payload
      localStorage.setItem('subcategory', JSON.stringify(state.subcategory))
    },
    getcourse: (state, payload)=>{
      state.courses = payload.filter(item => item.ca_id == state.subcategory.id)
      localStorage.setItem('courses', JSON.stringify(state.courses))
    },
    index: (state, payload) => {
      state.index = payload
      localStorage.setItem('index', JSON.stringify(payload))
    },
    allvideo: (state, payload)=>{
      state.allvideo = payload.filter(item => item.co_id == state.index)
      localStorage.setItem('allvideo', JSON.stringify(state.allvideo))
    }
  },
  actions: {
    subcategory :(context, payload)=>{
      context.commit('subcategory',payload)
    },
    getcourse :(context, payload)=>{
      context.commit('getcourse',payload)
    },
    index :(context, payload)=>{
      context.commit('index',payload)
    },
    allvideo :(context, payload)=>{
      context.commit('allvideo',payload)
    }
  },
  modules: {},
});
