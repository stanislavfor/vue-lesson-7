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
          <h2 class="project-details__title">Современные спальни</h2>
          <span style="display: block; padding-bottom: 40px;"></span>
          <p>В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...». Id atque molestias dolor doloremque. Natus illum quia sunt numquam voluptatem, earum molestiae labore enim, aperiam vitae placeat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id atque molestias dolor doloremque. Natus illum quia sunt numquam voluptatem, earum molestiae labore enim, aperiam vitae placeat quisquam! Distinctio qui assumenda repellat repellendus commodi minus ullam quisquam ipsam facilis possimus eos consectetur, a vero, maxime sit molestias quis eaque odit veritatis architecto. Ex maxime repudiandae vero asperiores reiciendis nulla fugiat ullam dolorum, eos, assumenda iure quo sed obcaecati enim. Vero voluptas tempore blanditiis eos incidunt iusto corporis ratione, vel adipisci, dignissimos, numquam dicta et officiis fuga unde fugiat deserunt debitis delectus?Id atque molestias dolor doloremque. Natus illum quia sunt numquam voluptatem, earum molestiae labore enim, aperiam vitae placeat.</p>
          <p class="project-details__description">Suscipit, animi nisi dicta explicabo aliquid nemo laboriosam, earum, ipsum! Natus illum quia sunt.</p>
        </div>
        <Carousel :images="carouselImages" />
        <div class="text-content">
          <p>В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...». </p>
          <a href="projects.html">Все Наши Проекты</a>
          <p>В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...». Id atque molestias dolor doloremque. Natus illum quia sunt numquam voluptatem, earum molestiae labore enim, aperiam vitae placeat.</p>
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

export default {
  name: 'ProjectDetailsComponent',
  components: {
    Header,
    Footer,
    Carousel
  },
  data() {
    return {
      navLinks: [
        { text: 'Домой', href: 'index.html#project-section' },
        { text: 'Наши успехи', href: 'projects.html' },
        { text: 'Блог', href: 'blog.html' },
        { text: 'Контакты', href: '#contact-section' }
      ],
      footerLinks: [
        { text: 'Домой', href: 'index.html#main-section' },
        { text: 'Новости', href: 'blog-details.html' },
        { text: 'Блог', href: 'blog.html' },
        { text: 'Наши успехи', href: 'index.html#achievements' }
      ],
      carouselImages: [
        require('@/assets/images/project-details-1.jpg'),
        require('@/assets/images/project-details-2.jpg'),
        require('@/assets/images/project-details-3.jpg'),
        require('@/assets/images/project-details-4.jpg'),
        require('@/assets/images/project-details-5.jpg'),
        require('@/assets/images/project-details-6.jpg'),
        require('@/assets/images/project-details-7.jpg'),
        require('@/assets/images/project-details-8.jpg'),
        require('@/assets/images/project-details-9.jpg')
      ]
    };
  }
};
</script>

<style scoped>
/* Add "scoped" attribute to limit CSS to this component only */
@import '@/assets/css/main.css';
@import '@/assets/css/media.css';
@import '@/assets/css/normalise.css';
</style>
