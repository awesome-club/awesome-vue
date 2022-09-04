<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useMemberStore } from "@/stores/member";
import { useRouter } from "vue-router";
import type { ChatDto } from "@/services/ChatService";
import { ChatService } from "@/services/ChatService";

const member = useMemberStore();
const router = useRouter();
const chats = ref([] as ChatDto[]);

onMounted(async () => {
  if (!member.isAuthenticated) {
    await router.push("/start");
    return;
  }

  chats.value = await ChatService.getChatList();
});
</script>

<template>
  <ul>
    <li v-for="chat in chats" :key="chat.key">
      <router-link :to="chat.key">{{ chat.title }}</router-link>
    </li>
  </ul>
</template>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

a {
  display: block;
  padding: var(--margin-sm);
  border-bottom: var(--border);
  text-decoration: none;
  color: #fff;
  transition: all 0.25s;
}

@media (hover: hover) {
  a:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
}
</style>
