<template>
  <header>
 <Navbar :links="links"/>
  </header>
</template>

<script>
import Navbar from './sub/Navbar.vue';
  export default {
    name:'Header',
    components: {
      Navbar,
    },
    data() {
      return {
        links: [{
          text: 'Homes',
          url: '#',
          active: true
        },
        {
          text: 'Pages',
          url: '#',
          active: false
        },
        {
          text: 'Blog',
          url: '#',
          active: false
        },
        {
          text: 'Shop',
          url: '#',
          active: false
        },
        {
          text: 'Events',
          url: '#',
          active: false
        },
        {
          text: 'Elements',
          url: '#',
          active: false
        },
      
      ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>