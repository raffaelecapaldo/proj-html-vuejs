<template>
  <header>
 <Hero />
  </header>
</template>

<script>
import Navbar from './sub/Navbar.vue';
import Hero from './sub/Hero.vue';
  export default {
    name:'Header',
    components: {
      Navbar,
      Hero,
    },
  
  }
</script>

<style lang="scss" scoped>

</style>