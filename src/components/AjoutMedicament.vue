<script setup>
import {ref} from "vue";
const url = "https://apipharmacie.pecatte.fr/api/8/medicaments"
const emit = defineEmits(['medicamentAjoute']);

const denomination = ref("");
const formepharmaceutique = ref("");
const qte = ref(0);
const photo = ref(null);


function ajoutMedicament() { // ce qui est sortie du formulaire
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const fetchOptions = {
    method: "POST", // je dis que je veux ajouter
    headers: myHeaders,
    body: JSON.stringify({ denomination : denomination.value,formepharmaceutique: formepharmaceutique.value, photo:photo.value,qte:qte.value }),
  };
  fetch(url, fetchOptions)
      .then((response) =>{ return response.json()
      })
      .then((dataJSON) => {
        emit('medicamentAjoute'); // récup des données de la BDD (dont le new "produit" ajouté)
      })
      .catch((error) => console.log(error));

}

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (!file) return; // Si l'utilisateur annule la sélection du fichier, on ne fait rien
  // FileReader est un objet JavaScript permettant de lire le contenu d'un fichier
  // de manière asynchrone.
  const reader = new FileReader();
  reader.onload = () => { // definir le traitement asynchrone du contenu du fichier
    photo.value = reader.result // --> convertit le contenu du fichier en base64
  };
  reader.readAsDataURL(file); // lance la lecture du fichier et donc la conversion en base64
};

</script>

<template>
  <form @submit.prevent="ajoutMedicament">

    <input type="text" v-model="denomination" placeholder="Nom du medicament" required/>
    <input type="text" v-model="formepharmaceutique" placeholder="Forme pharmaceutique" required/>
    <input type="number" v-model="qte" placeholder="Quantité" min="1" required/>
    <input id="photo" @change="handleFileUpload" type="file" />
    <input type="submit" value="valider" />
  </form>
</template>

<style scoped>

</style>