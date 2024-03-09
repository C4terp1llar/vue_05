<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>{{upHeader}}</h1>
      <h2>Счетчик {{ counter }} ({{doubleCounter}})</h2>
      <button class="btn primary" @click="inc">+</button>
      <button class="btn danger" @click="incCounterAsync({val: 15, delay: 2000})">+</button>
    </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import {mapGetters, mapMutations, mapActions} from 'vuex';

export default {
  methods: {
    ...mapMutations('count', ['inc']),
    ...mapActions('count', ['incCounterAsync'])
    // incCounterAsync() {
    //   this.$store.dispatch({
    //     type: 'incCounterAsync',
    //     val: 15,
    //     delay: 2000
    //   });
    // }
  },
  computed: {
    ...mapGetters(['upHeader']),
    ...mapGetters('count', ['counter', 'doubleCounter']),
  },
  components: {TheNavbar}
}
</script>

<style lang="scss">

</style>
