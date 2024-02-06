import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import ServicesView from "./views/ServicesView.vue";
import BlogView from "./views/BlogView.vue";
import BlogSeparateArticle from "./views/BlogSeparateArticle.vue";
import { inject } from "@vercel/analytics";

const router = createRouter({
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/services",
      component: ServicesView,
    },
    {
      path: "/blog",
      component: BlogView,
    },
    {
      path: "/blog/:id",
      component: BlogSeparateArticle,
    },
  ],

  history: createWebHistory(),
});

const app = createApp(App);
app.use(router);
app.mount("#app");
inject();