<script setup lang="ts">
import { useRouter } from "vue-router";
import { useMemberStore } from "@/stores/member";
const member = useMemberStore();
const router = useRouter();

function logout() {
  member.logOut();
  router.push("/start");
}
</script>

<template>
  <header class="main">
    <label>💬</label>

    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        Account<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="logout">Log Out</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </header>
</template>

<style scoped>
header.main {
  padding: var(--margin-sm) var(--margin);
  border-bottom: var(--border);
  display: flex;
  min-height: 60px;
}

.el-dropdown {
  margin-left: auto;
}

.el-dropdown-link {
  display: flex;
  cursor: pointer;
}

label {
  font-size: 22px;
  position: absolute;
  left: 50%;
  margin-left: -10px;
  color: #fff;
}
</style>
