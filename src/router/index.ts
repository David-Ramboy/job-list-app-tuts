// router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Authview from '../views/AuthView.vue';
import JobListTemplate from '../components/JobsListTemplate.vue'
// import About from './views/About.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/auth',
    name:'auth',
    component: Authview,
  },
  {
    path:'/',
    name:'home',
    component: JobListTemplate,
    props: (route) => ({

    })
  }
//   {
//     path: '/about',
//     component: About,
//   },
  // Add more routes here if needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
