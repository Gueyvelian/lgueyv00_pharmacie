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
let textBoutonListeCommande = ref("Liste des commandes")

function ajouterChampCommande() {
  afficher.value = !afficher.value
}

function aficherListeCommande() {
  afficherListe.value = !afficherListe.value
  if (afficherListe.value){
    textBoutonListeCommande = "Fermer"
  }
  else{
    textBoutonListeCommande = "Liste des commandes"
  }
}

function ajouterChampMedicament() {
  nouveauMedicament.value = !nouveauMedicament.value
}


function rafraichirListeMedicaments() {
  if (nouvelleListe.value) {
    nouvelleListe.value.getMedicaments();
    nouveauMedicament.value = false;
  }
}

function rafraichirCommande() {
  if (afficher) {
    afficher.value = false;

  }
}



</script>

<template>
    <h1>Stock de la pharmacie</h1>
    <RechercherMedicament/>
    <button @click="ajouterChampCommande">Faire une commande</button>

    <FaireCommande v-if="afficher" :listCommande="listCommande" @nouvellecommande="rafraichirCommande" />


    <button @click="aficherListeCommande">{{ textBoutonListeCommande }}</button>
    <div v-if="afficherListe">
      <h4>Commandes passées :</h4>
      <ul
        v-for="(commande, index) in listCommande"
        :key="commande.id">
          <li>{{commande.pourAfficher()}}</li>
      </ul>
    </div>

    <AffichMedicamantList ref="nouvelleListe"/>

    <button @click="ajouterChampMedicament">Ajout d'un medicament</button>

    <AjoutMedicament v-if="nouveauMedicament" @medicamentAjoute="rafraichirListeMedicaments" />
</template>

<style scoped>

</style>