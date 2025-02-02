<template>
  <footer class="footer" id="contact-section">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__logo">
          <picture>
            <img class="footer__logo-img" src="@/assets/images/logo.png" alt="">
          </picture>
          <br>
          <br>
          <br>
          <p class="footer__logo-text"></p>
          <div v-for="(link, index) in footerLinks" :key="index" class="header__list-item">
            <a class="header__list-link" :href="link.href">{{ link.text }}</a>
          </div>
        </div>
        <ul class="footer__social">
          <li class="footer__social-item">
            <a class="footer__social-link" href="#">
              <picture>
                <img class="footer__social-link-img" src="@/assets/images/tw.png" alt="">
              </picture>
            </a>
          </li>
          <li class="footer__social-item">
            <a class="footer__social-link" href="#">
              <picture>
                <img class="footer__social-link-img" src="@/assets/images/li.png" alt="">
              </picture>
            </a>
          </li>
          <li class="footer__social-item">
            <a class="footer__social-link" href="#">
              <picture>
                <img class="footer__social-link-img" src="@/assets/images/tw.png" alt="">
              </picture>
            </a>
          </li>
          <li class="footer__social-item">
            <a class="footer__social-link" href="#">
              <picture>
                <img class="footer__social-link-img" src="@/assets/images/li.png" alt="">
              </picture>
            </a>
          </li>
          <li class="footer__social-item">
            <a class="footer__social-link" href="#">
              <picture>
                <img class="footer__social-link-img" src="@/assets/images/tw.png" alt="">
              </picture>
            </a>
          </li>
        </ul>
        <div class="footer__contacts">
          <h4 class="footer__contacts-title">Контакты</h4>
          <br>
          <br>
          <p class="footer__contacts-address">55 East Birchwood Ave. Brooklyn, New York 11201</p>
          <a class="footer__contacts-email" href="mailto:contact@interno.com">contact@interno.com</a>
          <a href="tel:1234567890" class="footer__contacs-phone">(123) 456 - 7890</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  props: {
    footerLinks: {
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
