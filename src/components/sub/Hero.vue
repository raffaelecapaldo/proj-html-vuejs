<template>
    <div class="hero">
        <Navbar :links="links" />
        <div class="wrapper">
            <h1>Our Team <span>.</span></h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque placeat eaque inventore, quis iusto, quibusdam atque modi.</p>
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';
    export default {
        name:'Hero',
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
.hero {
    height: 830px;
    background-image: url('/img/rev-slider-main-home-img-03.jpg');
    background-position-y: -90px;
}

.hero-container {
    width: 95%;
    margin:0 auto;
}

.wrapper {
    padding-top:19rem;
    width: 550px;
    margin-left:16rem;
    p {
        font-size:1.3rem;
        color:#555555;
        font-weight: 200;
    }
    h1 {
        font-weight: bold;
        font-size:5.5rem;
        font-family: "Libre Baskerville", serif;
        span {
            margin-left: -25px;
            color:$orange;
        }
    }
}
</style>