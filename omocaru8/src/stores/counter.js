import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    name: 'Eduardo'
  }),


  actions: {
    increment() {
      this.count++
    }
  },


  getters: {
    doubleCount: (state) => {
      return state.count * 2
    },
  },
})
