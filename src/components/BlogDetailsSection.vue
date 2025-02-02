<template>
  <section class="main-blog-details" id="project-details-up">
    <div class="blog-details">
      <blog-posts :posts="filteredPosts"></blog-posts>
    </div>
    <div class="sidebar">
      <h2>Тэги</h2>
      <button class="smooth-button" v-for="tag in tags" :key="tag" @click="filterPosts(tag)">{{ tag }}</button>
      <button class="smooth-button" @click="filterPosts('')">Все Тэги</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogDetailsSection',
  components: {
    'blog-posts': {
      props: ['posts'],
      template: `
        <div>
          <div v-for="post in posts" :key="post.title">
            <h2>{{ post.title }}</h2>
            <p class="blog-details__article-date">{{ post.date }}</p>
            <p class="blog-details__article-tags">{{ post.tag }}</p>
            <div v-for="(content, index) in post.content" :key="index">
              <picture v-if="content.type === 'img'">
                <img class="blog-details__article-img" :src="content.src" alt="">
              </picture>
              <p v-if="content.type === 'text'" class="blog-details__article-text">{{ content.text }}</p>
            </div>
          </div>
        </div>
      `
    }
  },
  props: {
    posts: {
      type: Array,
      required: true
    },
    tags: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedTag: ''
    };
  },
  computed: {
    filteredPosts() {
      if (this.selectedTag) {
        return this.posts.filter(post => post.tag === this.selectedTag);
      }
      return this.posts;
    }
  },
  methods: {
    filterPosts(tag) {
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
