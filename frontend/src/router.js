import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "feedList",
      component: () => import("@/views/FeedList.vue")
    },
    {
        path: "/feedIngredients",
        name: "feedIngredients",
        component: () => import("@/views/FeedIngredients.vue")
      }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return window.scrollTo({
        top: document.querySelector(to.hash).offsetTop,
        behavior: "smooth",
      });
    } else {
      return { x: 0, y: 0 };
    }
  },
});
