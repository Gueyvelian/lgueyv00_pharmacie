<script setup>
defineProps(["listeCommande"]);
import Commande from "../Commande.js";
</script>

<template>
  <form @submit.prevent="$emit('eventFaireCommande', Commande)">

    <input type="text" v-model="commandeNom" placeholder="Nom du demandeur" />
    <input type="text" v-model="commandePrenom" placeholder="Prenom du demandeur" />
    <input type="text" v-model="medicamantNombre" placeholder="Nombre de médicament diferent" />
    <input type="text" v-model="medicamant" placeholder="Medicamant" />
    <input type="text" v-model="medicamantQuantiter" placeholder="Quantiter" />
    <button>Ajouter un Medicament</button>
    <input type="submit" value="valider" />
  </form>

</template>

<style scoped>

</style>