<template>
  <header class="header" id="main-section">
    <div class="container">
      <div class="header__inner">
        <picture>
          <img class="header__logo" src="@/assets/images/logo.png" alt="">
        </picture>
        <nav class="header__nav">
          <ul class="header__nav-list header__list">
            <li v-for="(link, index) in navLinks" :key="index" class="header__list-item">
              <a class="header__list-link" :href="link.href">{{ link.text }}</a>
            </li>
          </ul>
          <div class="icon-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
        <div class="header__plate"></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    navLinks: {
      type: Array,
      required: true
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
