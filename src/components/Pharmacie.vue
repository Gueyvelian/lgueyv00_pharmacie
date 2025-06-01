<script setup>
import AffichMedicamantList from "@/components/AffichMedicamantList.vue";
import {reactive, ref} from "vue";
import FaireCommande from "@/components/FaireCommande.vue";
import AjoutMedicament from "@/components/AjoutMedicament.vue";
import RechercherMedicament from "@/components/RechercherMedicament.vue";
import Commande from "@/Commande.js";
const afficher = ref(false)
const nouveauMedicament = ref(false)
const nouvelleListe = ref(null);
const listCommande = reactive([new Commande("Dupont", "Doliprane", 5), new Commande("Lemont", "Doliprane", 5)])
let afficherListe = ref(false);

function ajouterChampCommande() {
  afficher.value = !afficher.value
}

function aficherListeCommande() {
  afficherListe.value = !afficherListe.value
}

function ajouterChampMedicament() {
  nouveauMedicament.value = !nouveauMedicament.value
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
    <RechercherMedicament/>
    <button @click="ajouterChampCommande">Faire une commande</button>
    <div v-if="afficher">
      <div>
        <FaireCommande
            :listCommande="listCommande"
            @eventAjout="handlerAdd"/>
      </div>
    </div>

    <button @click="aficherListeCommande">Liste des commandes client</button>
    <div v-if="afficherListe">
      <div>Commandes passé: </div>
      <div
        v-for="(commande, index) in listCommande"
        :key="commande.id">
          <div>{{commande.pourAfficher()}}</div>
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