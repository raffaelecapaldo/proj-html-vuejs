<template>
  <div :class="bgClasses[current]" class="hero container-fluid position-relative">
    <Navbar :links="links" />
    <div class="wrapper">
      <div @click="goPrev()" class="arrow-left"><i class="fa-solid fa-arrow-left"></i></div>
      <div @click="goNext()" class="arrow-right"><i class="fa-solid fa-arrow-right"></i></div>
      <h1 class="black-title">Our Team <span class="orange-dot">.</span></h1>
      <p class="subtext">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque placeat eaque inventore, quis
        iusto, quibusdam atque modi.</p>
      <div class="cta mt-5">
        <a class=" text-uppercase me-3 buttoncta vwhite" href="#">
          <div class="btn-content d-flex align-items-center">Read More
            <div class="delimiter  ms-4 me-3"></div>
            <div class="arrow">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </a>
        <a class="me-3 text-uppercase  buttoncta vorange" href="#">
          <div class=" btn-content d-flex align-items-center">Purchase
            <div class="delimiter  ms-4 me-3"></div>
            <div class="arrow ">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
export default {
  name: 'Hero',
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

      ],
      bgClasses: ['bg1', 'bg2', 'bg3'],
      current:2,
    }
  },
  methods: {
    goPrev() {
      if (this.current === 0) {
        this.current = this.bgClasses.length - 1;
      }
      else {
        this.current--;
      }
    },
    goNext() {
      if (this.current === this.bgClasses.length - 1) {
        this.current = 0;
      }
      else {
        this.current++;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  height: 890px;
  background-position-y: -90px;
}

.bg1 {
  background-image: url('/img/h1-rev-img-01.jpg');
}

.bg2 {
  background-image: url('/img/rev-slider-main-home-img-02.png');
}

.bg3{
  background-image: url('/img/rev-slider-main-home-img-03.jpg');
}

.hero-container {
  width: 95%;
  margin: 0 auto;
}

.wrapper {
  padding-top: 19rem;
  width: 550px;
  margin-left: 16rem;
  .arrow-left, .arrow-right {
    position:absolute;
    top:400px;
    font-size:2rem;
    padding:10px;
    cursor:pointer;
  }
  .arrow-left{
    left:60px;
  }
  .arrow-right {
    right:60px;
  }

}
</style>