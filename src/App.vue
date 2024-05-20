<script setup lang="ts">
import { ref } from "vue";

const counter = ref(0);
</script>

<template>
  <div class="app2">
    <button @click="counter++">点击 {{ counter }}</button>
    <el-button type="primary" @click="counter++">点击我</el-button>
  </div>
</template>
