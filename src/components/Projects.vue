<template>
  <div class="wrapper" id="app">
    <Header :navLinks="navLinks" />
    <main class="main" style="margin-bottom: 150px;">
      <section class="main-projects-section" id="blog-up">
        <div class="container-blog">
          <div class="main-blog-section__content">
            <h1 class="main-blog-section__title">Наши Проекты & работы</h1>
          </div>
          <p class="project-details__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt,
            nulla obcaecati. Exercitationem animi ratione, error, accusamus aspernatur officia, unde ea odit aperiam
            nobis molestiae dolorum voluptatum voluptate iusto vel nulla nisi vero.</p>
          <span style="display: block; padding-bottom: 40px;"></span>
        </div>
        <ProjectsMenu :tags="tags" @filter-projects="filterProjects" />
      </section>
      <ProjectsGallery :projects="projects" :selectedTag="selectedTag" />
    </main>
    <Footer :footerLinks="footerLinks" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ProjectsMenu from '@/components/ProjectsMenu.vue';
import ProjectsGallery from '@/components/ProjectsGallery.vue';

export default {
  name: 'ProjectsComponent',
  components: {
    Header,
    Footer,
    ProjectsMenu,
    ProjectsGallery
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
        { text: 'Домой', href: '/project-details-kitchen' },
        { text: 'Новости', href: '/blog-details' },
        { text: 'Блог', href: '/blog' },
        { text: 'Наши успехи', href: '/#achievements' }
      ],
      projects: [
        { id: 1, image: require('@/assets/images/project-1.jpg'), title: 'Минималистичная гостинная 1', tag: 'Гостинная', link: '/project-details-kitchen' },
        { id: 2, image: require('@/assets/images/project-2.jpg'), title: 'Минималистичная спальня 1', tag: 'Спальня', link: '/project-details' },
        { id: 3, image: require('@/assets/images/project-17.jpg'), title: 'Минималистичный балкон 2', tag: 'Балкон', link: '/project-details-kitchen' },
        { id: 4, image: require('@/assets/images/project-12.jpg'), title: 'Минималистичная прихожая 1', tag: 'Прихожая', link: '/project-details' },
        { id: 5, image: require('@/assets/images/project-14.jpg'), title: 'Минималистичная ванная 1', tag: 'Ванная', link: '/project-details-kitchen' },
        { id: 6, image: require('@/assets/images/project-16.jpg'), title: 'Минималистичный балкон 1', tag: 'Балкон', link: '/project-details' },
        { id: 7, image: require('@/assets/images/project-8.jpg'), title: 'Минималистичная гостинная 2', tag: 'Гостинная', link: '/project-details' },
        { id: 8, image: require('@/assets/images/project-7.jpg'), title: 'Минималистичная гостинная 3', tag: 'Гостинная', link: '/project-details' },
        { id: 9, image: require('@/assets/images/project-19.jpg'), title: 'Минималистичная кухня 1', tag: 'Кухня', link: '/project-details-kitchen' },
        { id: 10, image: require('@/assets/images/project-10.jpg'), title: 'Минималистичная прихожая 8', tag: 'Прихожая', link: '/project-details' },
        { id: 11, image: require('@/assets/images/project-11.jpg'), title: 'Минималистичная прихожая 9', tag: 'Прихожая', link: '/project-details' },
        { id: 12, image: require('@/assets/images/project-22.jpg'), title: 'Минималистичная кухня 14', tag: 'Кухня', link: '/project-details-kitchen' },
        { id: 13, image: require('@/assets/images/project-9.jpg'), title: 'Минималистичная спальня 15', tag: 'Спальня', link: '/project-details' },
        { id: 14, image: require('@/assets/images/project-21.jpg'), title: 'Минималистичная кухня 9', tag: 'Кухня', link: '/project-details-kitchen' },
        { id: 15, image: require('@/assets/images/project-13.jpg'), title: 'Минималистичная ванная 2', tag: 'Ванная', link: '/project-details' },
        { id: 16, image: require('@/assets/images/project-23.jpg'), title: 'Минималистичная ванная 3', tag: 'Ванная', link: '/project-details' }
      ],
      selectedTag: '',
      tags: ['Кухня', 'Спальня', 'Гостинная', 'Прихожая', 'Балкон', 'Ванная']
    };
  },
  methods: {
    filterProjects(tag) {
      this.selectedTag = tag;
    }
  }
};
</script>

<style scoped>
/* Add "scoped" attribute to limit CSS to this component only */
@import '@/assets/css/main.css';
@import '@/assets/css/media.css';
@import '@/assets/css/normalise.css';
</style>
