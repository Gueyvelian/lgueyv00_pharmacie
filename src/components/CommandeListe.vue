<script setup>
defineProps(["listComande"]);

import {ref } from "vue";
const text = ref("")

</script>

<template>
  <form @submit.prevent="$emit('eventListComande', ListCommande)">

  </form>
</template>

<style scoped>

</style>