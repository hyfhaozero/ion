<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
// 获取路由实例，以便在组件内使用
const router = useRouter();
</script>
