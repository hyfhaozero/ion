<template>
  <div>
    <button @click="goToAbout">Go to About</button>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goToAbout = () => {
  router.push('/about');
};
</script>
