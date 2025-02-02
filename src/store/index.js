import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        carouselImages: [
      require('@/assets/images/project-details-10.jpg')
      , require('@/assets/images/project-details-11.jpg')
      , require('@/assets/images/project-details-12.jpg')
      , require('@/assets/images/project-details-13.jpg')
      , require('@/assets/images/project-details-14.jpg')
      , require('@/assets/images/project-details-15.jpg')
      , require('@/assets/images/project-details-16.jpg')
      , require('@/assets/images/project-details-17.jpg')
      , require('@/assets/images/project-details-18.jpg')
    ]
    }
    , mutations: {
        setCarouselImages(state, images) {
            state.carouselImages = images;
        }
    }
    , actions: {
        fetchCarouselImages({
            commit
        }) {
            const images = [
        require('@/assets/images/project-details-10.jpg')
        , require('@/assets/images/project-details-11.jpg')
        , require('@/assets/images/project-details-12.jpg')
        , require('@/assets/images/project-details-13.jpg')
        , require('@/assets/images/project-details-14.jpg')
        , require('@/assets/images/project-details-15.jpg')
        , require('@/assets/images/project-details-16.jpg')
        , require('@/assets/images/project-details-17.jpg')
        , require('@/assets/images/project-details-18.jpg')
      ];
            commit('setCarouselImages', images);
        }
    }
    , getters: {
        getCarouselImages: state => state.carouselImages
    }
});