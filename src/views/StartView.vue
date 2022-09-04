<script setup lang="ts">
import { useMemberStore } from "@/stores/member";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const router = useRouter();
const member = useMemberStore();
const email = ref("");

onMounted(() => {
  if (member.isAuthenticated) {
    router.push("/");
  }
});

function login() {
  member.authenticate(email.value);
  router.push("/");
}
</script>

<template>
  <div class="start">
    <el-input
      type="email"
      size="large"
      v-model="email"
      placeholder="Please input"
    />
    <el-button size="large" :disabled="!email" type="primary" @click="login"
      >Start</el-button
    >
  </div>
</template>

<style scoped>
.start {
  padding: var(--margin);
}

.el-input {
  margin-bottom: var(--margin-sm);
}

button {
  width: 100%;
}
</style>
