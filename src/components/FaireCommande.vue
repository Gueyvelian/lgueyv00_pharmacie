<script setup>
import {ref} from "vue";
import Commande from "@/Commande.js";

const props = defineProps(["listCommande"]);
const commandeNom = ref ("");
const medicament = ref ("");
const medicamentQuantiter = ref ("");


function nouvellecommande(){
  let newCommande = new Commande(commandeNom, medicament, medicamentQuantiter);
  props.listCommande.push(newCommande);
  console.log("les nouvelle commande");
}

</script>


<template>
  <form @submit.prevent="nouvellecommande(commandeNom, medicament, medicamentQuantiter)">

    <input type="text" v-model="commandeNom" placeholder="Nom du demandeur" required/>
    <input type="text" v-model="medicament" placeholder="Medicamant" required/>
    <input type="number" v-model="medicamentQuantiter" placeholder="Quantiter" required/>
    <input type="submit" value="valider" />
  </form>

</template>

<style scoped>

</style>