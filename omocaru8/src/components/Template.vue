<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import { useTransportationStore } from '@/stores/transportation'

export default {
  name: '',
  components: { },
  data() { },
  computed: {
    ...mapState(useTransportationStore, {
      isLogin: 'isLogin'
    }),
    ...mapWritableState(useTransportationStore,{
      isLogin: 'isLogin'
    }),
  },
  methods: {
    ...mapActions(useTransportationStore, {
      login: 'login'
    })
  },
  created() { },
}
</script>

<template>
  <RouterLink></RouterLink>
  <RouterView />
</template>

<style>
</style>
  