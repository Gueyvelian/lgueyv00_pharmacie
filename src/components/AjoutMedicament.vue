<script setup>
import {ref} from "vue";
const url = "https://apipharmacie.pecatte.fr/api/8/medicaments"
const emit = defineEmits(['medicamentAjoute']);

const denomination = ref('');
const formepharmaceutique = ref('');
const qte = ref(0);
const photo = ref('');

function ajoutMedicament(denomination,formepharmaceutique,photo, qte) { // ce qui est sortie du formulaire
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const fetchOptions = {
    method: "POST", // je dis que je veux ajouter
    headers: myHeaders,
    body: JSON.stringify({ denomination : denomination,formepharmaceutique: formepharmaceutique, photo:photo,qte:qte }),
  };
  fetch(url, fetchOptions)
      .then((response) =>{ return response.json()
      })
      .then((dataJSON) => {
        console.log(dataJSON); //renvoie : {"status" : 0 ou 1}, savoir si ça a marché ou non
        emit('medicamentAjoute'); // récup des données de la BDD (dont le new "produit" ajouté)
      })
      .catch((error) => console.log(error));

}
</script>

<template>
  <form @submit.prevent="ajoutMedicament(denomination,formepharmaceutique,photo, qte)">

    <input type="text" v-model="denomination" placeholder="Nom du medicament" required/>
    <input type="text" v-model="formepharmaceutique" placeholder="Forme pharmaceutique" required/>
    <input type="number" v-model="qte" placeholder="Quantiter" required/>
    <input type="text" v-model="photo" placeholder="Photo du medicament" />
    <input type="submit" value="valider" />
  </form>
</template>

<style scoped>

</style>