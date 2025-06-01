

<script setup>
defineProps(["medicamant","indexMedicamant"]);
</script>

<template>
  <div class="item">
    <button @click="$emit('eventDeleteItem', medicamant.id)">Supprimer</button>
    <button>Modifier</button>
    <div>
      <button @click="$emit('eventAjouteQteItem', indexMedicamant)">+1</button>
      <button @click="$emit('eventRetirQteItem', indexMedicamant)">-1</button>
    </div>
  </div>


</template>

<style scoped>
.item {
  width: 100px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
}
</style>