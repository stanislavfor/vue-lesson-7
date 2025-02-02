<template>
  <div class="wrapper">
    <Header :navLinks="navLinks" />
    <main class="main">
      <section class="main-project-details" id="project-details-up">
        <div class="container-blog">
          <div class="main-blog-section__content"></div>
        </div>
      </section>
      <div class="project-details__inner">
        <div class="text-content">
          <h2 class="project-details__title">Минималистичные кухни</h2>
          <span style="display: block; padding-bottom: 40px;"></span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id atque molestias dolor doloremque. Natus illum quia sunt numquam voluptatem, earum molestiae labore enim, aperiam vitae placeat quisquam! Distinctio qui assumenda repellat repellendus commodi minus ullam quisquam ipsam facilis possimus eos consectetur, a vero, maxime sit molestias quis eaque odit veritatis architecto. Ex maxime repudiandae vero asperiores reiciendis nulla fugiat ullam dolorum, eos, assumenda iure quo sed obcaecati enim. Vero voluptas tempore blanditiis eos incidunt iusto corporis ratione, vel adipisci, dignissimos, numquam dicta et officiis fuga unde fugiat deserunt debitis delectus?Id atque molestias dolor doloremque. Natus illum quia sunt numquam voluptatem, earum molestiae labore enim, aperiam vitae placeat.</p>
          <p class="project-details__description">Suscipit, animi nisi dicta explicabo aliquid nemo laboriosam, earum, ipsum! Natus illum quia sunt.</p>
        </div>
        <Carousel :images="carouselImages" />
        <div class="text-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id atque molestias dolor doloremque. Natus illum quia sunt numquam voluptatem, earum molestiae labore enim, aperiam vitae placeat quisquam! Distinctio qui assumenda repellat repellendus commodi minus ullam quisquam ipsam facilis possimus eos consectetur, a vero, maxime sit molestias quis eaque odit veritatis architecto. Ex maxime repudiandae vero asperiores reiciendis nulla fugiat ullam dolorum, eos, assumenda iure quo sed obcaecati enim. Vero voluptas tempore blanditiis eos incidunt iusto corporis ratione, vel adipisci, dignissimos, numquam dicta et officiis fuga unde fugiat deserunt debitis delectus?Id atque molestias dolor doloremque. Natus illum quia sunt numquam voluptatem, earum molestiae labore enim, aperiam vitae placeat.</p>
          <a href="projects.html">Все Наши Проекты</a>
        </div>
      </div>
    </main>
    <Footer :footerLinks="footerLinks" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Carousel from '@/components/Carousel.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'ProjectDetailsKitchenComponent',
  components: {
    Header,
    Footer,
    Carousel
  },
  data() {
    return {
      navLinks: [
        { text: 'Домой', href: '/' },
        { text: 'Наши успехи', href: '/projects' },
        { text: 'Блог', href: '/blog' },
        { text: 'Контакты', href: '#contact-section' }
      ],
      footerLinks: [
        { text: 'Домой', href: '/' },
        { text: 'Новости', href: '/blog-details' },
        { text: 'Блог', href: '/blog' },
        { text: 'Наши успехи', href: '/#achievements' }
      ]
    };
  },
  computed: {
    ...mapGetters(['getCarouselImages']),
    carouselImages() {
      return this.getCarouselImages;
    }
  },
  created() {
    document.title = 'Кухни';
    this.$store.dispatch('fetchCarouselImages');
  }
};
</script>

<style scoped>
/* Add "scoped" attribute to limit CSS to this component only */
@import '@/assets/css/main.css';
@import '@/assets/css/media.css';
@import '@/assets/css/normalise.css';
</style>
