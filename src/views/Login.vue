<template>
  <div>
    Enter:<input id="inputsrc" /> /><br />
    <button @click="gotoHome">Go Home</button>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const gotoHome = () => {
  localStorage.setItem("server", "test");
  router.push("/home");
};
</script>
