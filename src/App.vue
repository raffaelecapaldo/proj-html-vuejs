<template>
  <a href="#"> <button class="scroll-up">
      <i class="fa-solid fa-arrow-up"></i>
    </button></a>
  <Header />
  <Main />
  <Footer />
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
export default {
  components: {
    Header,
    Main,
    Footer,
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-weight: 400;
}

.scroll-up {
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 10000;
  background-color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  i {
    font-size: 1.5rem;
    color: $orange;
  }
}
</style>