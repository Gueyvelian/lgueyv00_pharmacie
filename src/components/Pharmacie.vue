<script setup>
import AffichMedicamantList from "@/components/AffichMedicamantList.vue";
import {reactive, ref} from "vue";
import CommandeListe from "@/components/CommandeListe.vue";
import FaireCommande from "@/components/FaireCommande.vue";
import AjoutMedicament from "@/components/AjoutMedicament.vue";
import Medicament from "@/Medicament.js";
const afficher = ref(false)
const afficherListe = ref(false)
const nouveauMedicament = ref(false)
const nouvelleListe = ref(null);


function ajouterChampCommande() {
  afficher.value = !afficher.value
}

function aficherListeCommande() {
  afficherListe.value = !afficherListe.value
}

function ajouterChampMedicament() {
  nouveauMedicament.value = !nouveauMedicament.value
  console.log(nouveauMedicament.value)
}


function rafraichirListeMedicaments() {
  if (nouvelleListe.value) {
    nouvelleListe.value.getMedicaments();
  }
}

</script>

<template>
  <ul>
    <h1>Stock de la pharmacie</h1>
    <CommandeListe/>
    <button>Rechercher un medicamant</button>
    <button @click="ajouterChampCommande">Faire une commande</button>
    <div v-if="afficher">
      <div>
        <FaireCommande/>
      </div>
    </div>

    <button @click="aficherListeCommande">Liste des commandes client</button>
    <div v-if="afficherListe">
      <div>
        <CommandeListe
            :listComande="listComande"
            @eventListComande="handlerListComande"/>
      </div>
    </div>

    <AffichMedicamantList ref="nouvelleListe"/>

    <button @click="ajouterChampMedicament">Ajout d'un medicament</button>

    <div v-if="nouveauMedicament">
      <div>
        <AjoutMedicament @medicamentAjoute="rafraichirListeMedicaments" />
      </div>
    </div>

  </ul>

</template>

<style scoped>

</style>