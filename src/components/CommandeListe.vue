<script setup>
defineProps(["listComande"]);

import {ref } from "vue";
const text = ref("")

</script>

<template>
  <form @submit.prevent="$emit('eventListComande', ListCommande)">
    <ul>
      <li></li>
    </ul>
  </form>
</template>

<style scoped>

</style>