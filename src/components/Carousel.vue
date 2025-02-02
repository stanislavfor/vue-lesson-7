<template>
  <div class="carousel">
    <div class="carousel__inner" id="carouselInner">
      <div v-for="(image, index) in images" :key="index" class="carousel__item">
        <img :src="image" :alt="'Image ' + (index + 1)">
      </div>
    </div>
    <div class="carousel__controls">
      <button class="carousel__control" @click="prevSlide">←</button>
      <button class="carousel__control" @click="nextSlide">→</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselComponent',
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    showSlide(index) {
      const offset = -index * 100 + '%';
      document.getElementById('carouselInner').style.transform = 'translateX(' + offset + ')';
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.totalItems;
      this.showSlide(this.currentIndex);
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.totalItems) % this.totalItems;
      this.showSlide(this.currentIndex);
    }
  },
  mounted() {
    this.items = document.querySelectorAll('.carousel__item');
    this.totalItems = this.items.length;
    this.showSlide(this.currentIndex);
  }
};
</script>

<style scoped>
/* Add "scoped" attribute to limit CSS to this component only */
@import '@/assets/css/main.css';
@import '@/assets/css/media.css';
@import '@/assets/css/normalise.css';
</style>
