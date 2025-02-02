import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import Blog from '@/components/Blog.vue';
import BlogDetails from '@/components/BlogDetails.vue';
import ProjectDetails from '@/components/ProjectDetails.vue';
import ProjectDetailsKitchen from '@/components/ProjectDetailsKitchen.vue';
import Projects from '@/components/Projects.vue';
Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
    }
        , {
            path: '/index.html',
            name: 'Home',
            component: Home
    }
        , {
            path: '/project-details',
            name: 'ProjectDetails',
            component: ProjectDetails
    }
        , {
            path: '/project-details-kitchen',
            name: 'ProjectDetailsKitchen',
            component: ProjectDetailsKitchen
    }
        , {
            path: '/projects',
            name: 'Projects',
            component: Projects
    }
        , {
            path: '/blog',
            name: 'Blog',
            component: Blog
    }
        , {
            path: '/blog-details',
            name: 'BlogDetails',
            component: BlogDetails
    }
  ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth'
            };
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return {
                x: 0,
                y: 0
            };
        }
    }
});
