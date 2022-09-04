<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import type { ChatDto } from "@/services/ChatService";
import type { Nullable } from "@/types";
import { ChatService, Type, uniqueId } from "@/services/ChatService";
import ChatMessage from "@/components/ChatMessage.vue";

const route = useRoute();
const router = useRouter();
const chat = ref(null as Nullable<ChatDto>);
const text = ref("");

onMounted(async () => {
  const found = await ChatService.getChatDetails(`@${route.params.id}`);
  if (!found) {
    await router.push("not-found");
    return;
  }
  chat.value = found;
});

function send() {
  chat.value?.messages.push({
    id: uniqueId(),
    data: text.value,
    type: Type.Out,
  });
  text.value = "";
}

function onKeyUp(ev: KeyboardEvent) {
  if (ev.key === "Enter") {
    send();
  }
}
</script>

<template>
  <main>
    <ul>
      <li v-for="message in chat?.messages" :key="message.id">
        <chat-message :message="message" />
      </li>
    </ul>
    <footer>
      <el-input v-model="text" placeholder="Type here..." @keyup="onKeyUp" />
      <el-button type="primary" @click="send">Send</el-button>
    </footer>
  </main>
</template>

<style scoped>
main {
  position: relative;
  height: calc(100vh - 60px);
}
ul {
  margin: 0;
  padding: var(--margin);
  list-style-type: none;
}

footer {
  position: absolute;
  display: flex;
  left: 0;
  right: 0;
  bottom: 0;
  padding: var(--margin-xs);
  border-top: var(--border);
}

button {
  margin-left: var(--margin-xs);
}
</style>
