<template>
  <div class="wrapper">
    <Header :navLinks="navLinks" />
    <main class="main">
      <section class="main-section">
        <div class="container">
          <div class="main-section__content">
            <h1 class="main-section__title">Пусть<br> ваш дом будет уникальным</h1>
            <p class="main-section__title-text">Существует много вариаций Lorem Ipsum,
              <br> которые можно использовать.
            </p>
            <a class="main-section__btn" href="projects.html">Начать</a>
          </div>
        </div>
      </section>
      <section class="projects" id="project-section">
        <div class="container">
          <h2 class="projects__title">Следите за нашими проектами</h2>
          <p class="projects__title-text">С инструментами, облегчающими процесс, и поддержкой команды профессионалов
            <br> начать работать с нами проще простого.
          </p>
          <div class="projects__items">
            <div class="projects__item">
              <div class="project__item-top">
                <picture>
                  <img class="project__item-img" src="@/assets/images/project-1.png" alt="">
                </picture>
              </div>
              <div class="project__item-bottom">
                <div class="project__item-info project-info">
                  <h4 class="project-info__name">Современная кухня</h4>
                  <span class="project-info__style">Декор / Планировка</span>
                </div>
                <a href="projects.html" class="project__item-btn"></a>
              </div>
            </div>
            <div class="projects__item">
              <div class="project__item-top">
                <picture>
                  <img class="project__item-img" src="@/assets/images/project-2.png" alt="">
                </picture>
              </div>
              <div class="project__item-bottom">
                <div class="project__item-info project-info">
                  <h4 class="project-info__name">Современная кухня</h4>
                  <span class="project-info__style">Декор / Планировка</span>
                </div>
                <a href="projects.html" class="project__item-btn"></a>
              </div>
            </div><div class="projects__item">
              <div class="project__item-top">
                <picture>
                  <img class="project__item-img" src="@/assets/images/project-3.png" alt="">
                </picture>
              </div>
              <div class="project__item-bottom">
                <div class="project__item-info project-info">
                  <h4 class="project-info__name">Современная кухня</h4>
                  <span class="project-info__style">Декор / Планировка</span>
                </div>
                <a href="projects.html" class="project__item-btn"></a>
              </div>
            </div><div class="projects__item">
              <div class="project__item-top">
                <picture>
                  <img class="project__item-img" src="@/assets/images/project-4.png" alt="">
                </picture>
              </div>
              <div class="project__item-bottom">
                <div class="project__item-info project-info">
                  <h4 class="project-info__name">Современная кухня</h4>
                  <span class="project-info__style">Декор / Планировка</span>
                </div>
                <a href="projects.html" class="project__item-btn"></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="achievements" id="achievements">
        <div class="container">
          <div class="achievements__inner">
            <div class="achievements__box">
              <div class="achievements__number">12</div>
              <span class="achievements__text">Лет Опыта</span>
            </div>
            <div class="achievements__box">
              <div class="achievements__number">85</div>
              <span class="achievements__text">Успешных Проектов</span>
            </div>
            <div class="achievements__box">
              <div class="achievements__number">15</div>
              <span class="achievements__text">Проектов в Работе</span>
            </div>
            <div class="achievements__box">
              <div class="achievements__number">95</div>
              <span class="achievements__text">Счастливых Клиентов</span>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer :footerLinks="footerLinks" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'HomeComponent',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      navLinks: [
        { text: 'Проекты', href: '#project-section' },
        { text: 'Наши успехи', href: '#achievements' },
        { text: 'Блог', href: 'blog.html' },
        { text: 'Контакты', href: '#contact-section' }
      ],
      footerLinks: [
        { text: 'Домой', href: '#main-section' },
        { text: 'Проекты', href: '#project-section' },
        { text: 'Блог', href: 'blog.html' },
        { text: 'Наши успехи', href: '#achievements' }
      ]
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
