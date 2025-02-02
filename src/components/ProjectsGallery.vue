<template>
  <div class="projects__inner">
    <div class="projects__column">
      <div v-for="(project) in filteredProjects" :key="project.id" class="projects__item">
        <img :src="project.image" alt="project image" class="projects__img">
        <div class="projects__content">
          <div class="projects__description-wrapper">
            <h2 class="blogs__box-title">{{ project.title }}</h2>
            <router-link :to="project.link" class="projects__box-btn">Подробнее</router-link>
          </div>
          <p class="projects__description">{{ project.tag }}</p>
        </div>
      </div>
    </div>
    <div class="projects__column">
      <div v-for="(project) in filteredProjects" :key="project.id" class="projects__item">
        <img :src="project.image" alt="project image" class="projects__img">
        <div class="projects__content">
          <div class="projects__description-wrapper">
            <h2 class="blogs__box-title">{{ project.title }}</h2>
            <router-link :to="project.link" class="projects__box-btn">Подробнее</router-link>
          </div>
          <p class="projects__description">{{ project.tag }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ProjectsGalleryKitchen',
  props: {
    selectedTag: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters(['getProjects']),
    filteredProjects() {
      if (this.selectedTag) {
        return this.getProjects.filter(project => project.tag === this.selectedTag);
      }
      return this.getProjects;
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
