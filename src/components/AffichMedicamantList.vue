<script setup>
import {reactive} from "vue";
import PharmacieItem from "@/components/PharmacieItem.vue";
const url = "https://apipharmacie.pecatte.fr/api/8/medicaments"
const listMedicamant = reactive([]);

function getMedicaments() {
  const fetchOptions = { method: "GET" };
  fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        listMedicamant.splice(0, listMedicamant.length);
        for (let medicament of dataJSON) {
          console.log (medicament);
          listMedicamant.push(medicament);
        }
        console.log(listMedicamant);
        console.log(dataJSON);
      })
      .catch((error) => {
        console.log(error);
      });
}
defineExpose({ getMedicaments });
getMedicaments();

function handlerDelete(id){
  console.log(listMedicamant);
  const fetchOptions = {
    method: "DELETE", // je dis que je veux delete
  };
  fetch(url+"/"+id, fetchOptions)
      .then((response) =>{ return response.json()
      })
      .then((dataJSON) => {
        console.log(dataJSON); //renvoie : {"status" : 0 ou 1}, savoir si ça a marché ou non
        getMedicaments() // récup des données de la BDD (dont le produit suppr)
      })
      .catch((error) => console.log(error));
}

function AjouteQte(medicamant){
  medicamant.qte = medicamant.qte + 1;
  console.log(medicamant.qte);
}

function modifier(index){

}

</script>

<template>
  <h3>Liste des médicaments</h3>
  <div
      v-for="(medicament, index) in listMedicamant"
      :key="medicament.id"
      class="film-item">
    <div>{{medicament.denomination}}</div>
    <ul>
      <div>Quantite en stock: {{medicament.qte}} </div>
      <div>Quantiter réservé dans une commande: </div>
      <div>Sous forme de: {{medicament.formepharmaceutique}}</div>
    </ul>

    <PharmacieItem
        :medicamant="medicament"
        :indexMedicamant="index"
        @eventDeleteItem="handlerDelete"
        @eventAjouteQteItem="AjouteQte"
        @eventModifier="modifier"/>

    <img :src="'https://apipharmacie.pecatte.fr/images/' + medicament.photo" alt="L'image du médicament" class="image"/>

  </div>
</template>

<style scoped>
.image {
  width: 300px;
  height: 230px;
  object-fit: cover;
  border-radius: 8px;
  margin: 50px;
}

</style>