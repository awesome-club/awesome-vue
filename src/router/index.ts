import { createRouter, createWebHistory } from "vue-router";
import MessagesView from "@/views/MessagesView.vue";
import StartView from "@/views/StartView.vue";
import ChatView from "@/views/ChatView.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: MessagesView,
    },
    {
      path: "/start",
      component: StartView,
    },
    {
      path: "/@:id",
      component: ChatView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
