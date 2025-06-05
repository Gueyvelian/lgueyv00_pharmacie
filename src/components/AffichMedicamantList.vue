<script setup>
import {reactive, ref} from "vue";
import PharmacieItem from "@/components/PharmacieItem.vue";
const url = "https://apipharmacie.pecatte.fr/api/8/medicaments"
const listMedicament = reactive([]);


function getMedicaments() {
  const fetchOptions = { method: "GET" };
  fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        listMedicament.splice(0, listMedicament.length);
        for (let medicament of dataJSON) {
          listMedicament.push(medicament);
        }
      })
      .catch((error) => {
        console.log(error);
      });
}
defineExpose({ getMedicaments });
getMedicaments();

function handlerDelete(id){
  const fetchOptions = {
    method: "DELETE", // je dis que je veux delete
  };
  fetch(url+"/"+id, fetchOptions)
      .then((response) =>{ return response.json()
      })
      .then((dataJSON) => {
        getMedicaments() // récup des données de la BDD (dont le produit suppr)
      })
      .catch((error) => console.log(error));
}

function modifQuantite(medicament) {
  delete medicament.photo;
  if(medicament.qte<=0){
    handlerDelete(medicament.id);
  }
  modifier(medicament);
}

function modifier(medicament) {
  const fetchOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: medicament.id,
      denomination: medicament.denomination,
      formepharmaceutique: medicament.formepharmaceutique,
      photo: medicament.photo,
      qte: medicament.qte,
    }),
  };

  fetch(url, fetchOptions)
      .then((response) => response.json())
      .then((dataJSON) => {
        getMedicaments();
      })
      .catch((error) => console.error(error));
}


</script>

<template>
  <h3>Liste des médicaments</h3>
  <div class="liste">

    <PharmacieItem
        v-for="(medicament, index) in listMedicament"
        :key="medicament.id"
        :medicament="medicament"
        :indexMedicamant="index"
        @eventDeleteItem="handlerDelete"
        @eventModifQteItem="modifQuantite"
        @eventModifier="modifier"/>
  </div>
</template>

<style scoped>
.liste {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>