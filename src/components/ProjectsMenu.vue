<template>
  <div class="projects-menu">
    <div class="projects-menu__buttons">
      <button class="smooth-button" @click="filterProjects('')">Все Проекты</button>
      <button class="smooth-button" v-for="tag in tags" :key="tag" @click="filterProjects(tag)">{{ tag }}</button>
      <div class="border-line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsMenu',
  props: {
    tags: {
      type: Array,
      required: true
    }
  },
  methods: {
    filterProjects(tag) {
      this.$emit('filter-projects', tag);
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
