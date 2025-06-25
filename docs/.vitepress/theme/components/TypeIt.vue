<template></template>
<script setup lang="ts">
import { onMounted } from "vue";
import TypeIt from "typeit";

onMounted(() => {
  new TypeIt(".tagline", {
    strings: [
      "C 语言基础、数据结构和算法、计算机组成原理、操作系统、计算机网络、设计模式",
    ],
    speed: 200,
  }).go();
});
</script>
