import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'
// import router from '../router/index'
// markrow

export const useTransportationStore = defineStore('transportation', {
  state: () => ({
    baseUrl: 'https://omocarh8.herokuapp.com',
    transportations: [],
    detailTransportation: {},
    listBookmark: [],
    username: '',
    qr: {},
    isLogin: false
  }),


  actions: {
    async getTransportations(page, name) {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${this.baseUrl}/public/transportation`,
          params: { page, name }
        })
        this.transportations = data
      } catch (err) {
        this.router.push('/ERR-NOT-FOUND')
      }
    },

    async getDetail(id) {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${this.baseUrl}/public/transportation/${id}`,
        })
        this.detailTransportation = data
        this.router.push(`/transportation/${id}`)
      } catch (err) {
        this.router.push('/ERR-NOT-FOUND')
      }
    },

    async getUser() {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `${this.baseUrl}/users`,
          headers: { access_token: localStorage.getItem("access_token") }
        })
        this.username = data.username
      } catch (err) { }
    },

    async getBookmark() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${this.baseUrl}/public/wishlist`,
          headers: { access_token: localStorage.getItem("access_token") },
        })
        this.listBookmark = data
      } catch (err) {
        this.router.push('/ERR-NOT-FOUND')
      }
    },

    async addBookmark(id) {
      try {
        await axios({
          method: "POST",
          url: `${this.baseUrl}/public/wishlist/${id}`,
          headers: { access_token: localStorage.getItem("access_token") }
        })

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'SUCCESS',
          title: 'This Car Has Been Added to Your Wishlist',
          showConfirmButton: false,
          timer: 1500
        })

        this.router.push('/home')
      } catch (err) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'FAILED',
          text: `${err.response.data.message}`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    },

    async login(input) {
      try {
        const { email, password } = input
        const { data } = await axios({
          method: 'POST',
          url: `${this.baseUrl}/public/login`,
          data: { email, password }
        })
        localStorage.setItem('access_token', data.access_token)
        this.router.push('/home')
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response.data.message}`
        })
      }
    },
  
    async register(input) {
      try {
        const { username, email, password, phoneNumber, address } = input;
        await axios({
          method: "POST",
          url: `${this.baseUrl}/public/register`,
          data: { username, email, password, phoneNumber, address },
        })

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'SUCCESS',
          title: 'Your Data Has Been Save',
          showConfirmButton: false,
          timer: 1500
        })

        this.router.push('/login')
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response.data.message}`
        })
      }
    },

    async getQR(input) {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `https://api.happi.dev/v1/qrcode`,
          headers: {  
            "x-happi-key": '21cb91R6lk1ZYCeYdDJ69416RHdF3A646alLhhAn73EgFDUVanoq6syP'
          },
          params: { data: input }
        })
        this.qr = data
      } catch (err) {
        console.log(err)
      }
    },
  },



  getters: {
  },
})
