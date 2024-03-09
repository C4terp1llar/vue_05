<template>
  <header class="navbar">
    <strong>Счетчик {{counter}}</strong>

    <button class="btn" @click="inc">+</button>
  </header>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex';
  export default {
    computed: {
      // counter(){
      //   return this.$store.getters.counter;
      // },
      ...mapGetters('count', ['counter'])
    },
    methods: {
      ...mapMutations({
        varIncCounter: 'count/varIncCounter'
      }),
      inc(){
        this.varIncCounter({val: 2})

        // this.varIncCounter({val: 5})

        // this.$store.commit({
        //   type: 'varIncCounter',
        //   val: 5
        // })
      }
    }
  }
</script>
