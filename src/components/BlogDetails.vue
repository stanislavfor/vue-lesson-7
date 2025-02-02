<template>
  <div class="wrapper">
    <Header :navLinks="navLinks" />
    <main class="main">
      <section class="main-blog-details-section"></section>
      <BlogDetailsSection :posts="posts" :tags="tags" />
    </main>
    <Footer :footerLinks="footerLinks" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import BlogDetailsSection from '@/components/BlogDetailsSection.vue';

export default {
  name: 'BlogDetailsComponent',
  components: {
    Header,
    Footer,
    BlogDetailsSection
  },
  data() {
    return {
      navLinks: [
        { text: 'Проекты', href: 'projects.html' },
        { text: 'Блог', href: 'blog.html' },
        { text: 'Домой', href: 'index.html#main-section' },
        { text: 'Контакты', href: '#contact-section' }
      ],
      footerLinks: [
        { text: 'Домой', href: 'index.html#main-section' },
        { text: 'Проекты', href: 'projects.html' },
        { text: 'Блог', href: 'blog.html' },
        { text: 'Наши успехи', href: 'index.html#achievements' }
      ],
      posts: [
        {
          title: 'Создадим лучший макет перепланировки',
          date: '26 Декабря, 2024',
          tag: 'Кухня',
          content: [
            { type: 'img', src: require('@/assets/images/details-1.png') },
            { type: 'text', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam volutpat aliquam luctus. Pellentesque vitae aliquam nunc. Sed laoreet metus nec purus luctus, quis luctus lorem consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce vel interdum elit, at congue lorem. Vestibulum pellentesque, orci in gravida fermentum, purus libero varius urna, ut vehicula velit nulla a nisl. Sed aliquet, nisi eget sagittis tincidunt, nisi elit consectetur nunc, ut congue nisl nisi vitae nunc. Proin consectetur, nisi id ullamcorper varius, nisi nisi aliquam nisi, eget aliquam nisi nisi eget nisi.' },
            { type: 'img', src: require('@/assets/images/details-2.png') },
            { type: 'text', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam volutpat aliquam luctus. Pellentesque vitae aliquam nunc. Sed laoreet metus nec purus luctus, quis luctus lorem consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce vel interdum elit, at congue lorem. Vestibulum pellentesque, orci in gravida fermentum, purus libero varius urna, ut vehicula velit nulla a nisl. Sed aliquet, nisi eget sagittis tincidunt, nisi elit consectetur nunc, ut congue nisl nisi vitae nunc. Proin consectetur, nisi id ullamcorper varius, nisi nisi aliquam nisi, eget aliquam nisi nisi eget nisi.' }
          ]
        },
        {
          title: 'Design sprints are great',
          date: '22 Декабря, 2024',
          tag: 'Дизайн',
          content: [
            { type: 'img', src: require('@/assets/images/details-3.png') },
            { type: 'text', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam volutpat aliquam luctus. Pellentesque vitae aliquam nunc. Sed laoreet metus nec purus luctus, quis luctus lorem consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce vel interdum elit, at congue lorem. Vestibulum pellentesque, orci in gravida fermentum, purus libero varius urna, ut vehicula velit nulla a nisl. Sed aliquet, nisi eget sagittis tincidunt, nisi elit consectetur nunc, ut congue nisl nisi vitae nunc. Proin consectetur, nisi id ullamcorper varius, nisi nisi aliquam nisi, eget aliquam nisi nisi eget nisi.' },
            { type: 'img', src: require('@/assets/images/details-4.png') },
            { type: 'text', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam volutpat aliquam luctus. Pellentesque vitae aliquam nunc. Sed laoreet metus nec purus luctus, quis luctus lorem consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.' }
          ]
        },
        {
          title: 'Лучшие интерьерные идеи по низкой цене',
          date: '22 Декабря, 2024',
          tag: 'Здания',
          content: [
            { type: 'img', src: require('@/assets/images/details-5.png') },
            { type: 'text', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam volutpat aliquam luctus. Pellentesque vitae aliquam nunc. Sed laoreet metus nec purus luctus, quis luctus lorem consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.' },
            { type: 'img', src: require('@/assets/images/details-6.png') },
            { type: 'text', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam volutpat aliquam luctus. Pellentesque vitae aliquam nunc. Sed laoreet metus nec purus luctus, quis luctus lorem consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.' }
          ]
        },
        {
          title: 'Спальные интерьеры и возможности дизайнеров',
          date: '9 Декабря, 2024',
          tag: 'Спальня',
          content: [
            { type: 'img', src: require('@/assets/images/details-7.png') },
            { type: 'text', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam volutpat aliquam luctus. Pellentesque vitae aliquam nunc. Sed laoreet metus nec purus luctus, quis luctus lorem consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.' }
          ]
        },
        {
          title: 'Лучшие интерьерные решения для офисов',
          date: '25 Декабря, 2024',
          tag: 'Архитектура',
          content: [
            { type: 'img', src: require('@/assets/images/details-8.png') },
            { type: 'text', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam volutpat aliquam luctus. Pellentesque vitae aliquam nunc. Sed laoreet metus nec purus luctus, quis luctus lorem consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.' }
          ]
        },
        {
          title: 'Жизнь без дизайнерских решений',
          date: '10 Декабря, 2024',
          tag: 'Архитектура',
          content: [
            { type: 'img', src: require('@/assets/images/details-9.png') },
            { type: 'text', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam volutpat aliquam luctus. Pellentesque vitae aliquam nunc. Sed laoreet metus nec purus luctus, quis luctus lorem consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.' }
          ]
        },
        {
          title: 'Квартиры и офисы - делаем лучше',
          date: '05 Декабря, 2024',
          tag: 'Планировка',
          content: [
            { type: 'img', src: require('@/assets/images/details-10.png') },
            { type: 'text', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam volutpat aliquam luctus. Pellentesque vitae aliquam nunc. Sed laoreet metus nec purus luctus, quis luctus lorem consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce vel interdum elit, at congue lorem. Vestibulum pellentesque, orci in gravida fermentum, purus libero varius urna, ut vehicula velit nulla a nisl. Sed aliquet, nisi eget sagittis tincidunt, nisi elit consectetur nunc, ut congue nisl nisi vitae nunc. Proin consectetur, nisi id ullamcorper varius, nisi nisi aliquam nisi, eget aliquam nisi nisi eget nisi.' },
            { type: 'img', src: require('@/assets/images/details-11.png') }
          ]
        }
      ],
      tags: ['Кухня', 'Спальня', 'Здания', 'Архитектура', 'Планировка', 'Дизайн']
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
