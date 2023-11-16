<template>
  <div id="app">
    <Navbar />

    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Home from './components/Home.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Home,
    Footer,
  },
  data() {
    return {
      carouselId: 'my-carousel',
      slides: [
        { img: './assets/img/copa.png', caption: 'Slide 1' },
        { img: './assets/img/sala-individual.png', caption: 'Slide 2' },
        { img: './assets/img/sala-reunioes.png', caption: 'Slide 3' },
      ],
    };
  },
};
</script>
