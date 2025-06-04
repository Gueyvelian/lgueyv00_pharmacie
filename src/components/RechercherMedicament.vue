<script setup>
import { reactive, ref } from 'vue'
import Medicament from "../Medicament.js"
const url = "https://apipharmacie.pecatte.fr/api/8/medicaments";
const recherche = ref("");
const listeRecherche= reactive([]);
let texteRechercher= "Rechercher un medicament"
let boutonActivation = ref(false);

function rechercheMedicament(motcle){
  if (boutonActivation.value){
    fetch(url+"?search="+motcle)
        .then((response) =>{ return response.json()
        })
        .then( (dataJSON) => {
          let medicaments = dataJSON //objet au format json
          listeRecherche.splice(0,listeRecherche.length) // vide la liste de 0 à la taille de ma liste avant actualisations sinon comme que des push il y a duplication
          for (let medicament of medicaments){
            listeRecherche.push(new Medicament(medicament.denomination,medicament.forme,medicament.qte,medicament.photo))
          }
        })
        .catch( (error) => { // gestion des erreurs
          console.log(error)
        } )
    document.recherche.reset();
  }else{
    listeRecherche.splice(0,listeRecherche.length);
    recherche.value="";
  }


}

function TexteBoutonRechercher(){
  boutonActivation.value = !boutonActivation.value
  if (boutonActivation.value){
    texteRechercher = "Fermer"
  }
  else{
    texteRechercher= "Rechercher un medicament"
  }
}


</script>

<template>
  <form name="recherche" @submit.prevent="rechercheMedicament(recherche)" disabled>
    <input type="text" v-model="recherche" placeholder="Que recherchez-vous ?" required />
    <button type="submit" @click="TexteBoutonRechercher">{{ texteRechercher }}</button>
  </form>
  <br><br>
  <div
      v-for="medicament in listeRecherche"
      :key="medicament.id">
    <div>{{medicament.denomination}}</div>
    <ul>
      <div>Quantite en stock: {{medicament.qte}} </div>
    </ul>
  </div>
  <br><br>
</template>

<style scoped>

</style>