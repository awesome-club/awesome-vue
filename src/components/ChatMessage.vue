<script setup lang="ts">
import type { MessageDto } from "@/services/ChatService";
import { defineProps } from "vue";
const props = defineProps<{
  message: MessageDto;
}>();
</script>

<template>
  <div class="wrap">
    <div class="msg" :class="props.message.type">
      {{ props.message.data }}
    </div>
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
}
.msg {
  border-radius: 50px;
  padding: 5px var(--margin-sm);
  color: #fff;
  margin-bottom: 5px;
}

.in {
  background: #4caf50;
}

.out {
  background: #2196f3;
  margin-left: auto;
}
</style>
