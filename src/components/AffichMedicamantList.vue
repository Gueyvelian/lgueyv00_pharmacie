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

function modifQuantite(medicament,qte) {
  console.log(qte);
  if(qte<=0){
    console.log("oui");
    handlerDelete(medicament.id);
  }

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({id: medicament.id,denomination : medicament.denomination,formepharmaceutique: medicament.formepharmaceutique, photo:medicament.photo,qte:qte}),
  };
  fetch(url, fetchOptions)
      .then((response) =>{ return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON); //renvoie : {"status" : 0 ou 1}, savoir si ça a marché ou non
        getMedicaments(); //actualisation
      })
      .catch((error) => console.log(error));
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
        console.log( dataJSON);
        getMedicaments();
      })
      .catch((error) => console.error(error));
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
        @eventModifQteItem="modifQuantite"
        @eventModifier="modifier"/>

    <img :src="'https://apipharmacie.pecatte.fr/images/' + medicament.photo" alt="L'image du médicament" class="image"/>

  </div>
</template>

<style scoped>
.image {
  height: 230px;
  border-radius: 8px;
  margin: 50px;
}

</style>