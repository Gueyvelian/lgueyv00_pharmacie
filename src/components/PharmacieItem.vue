<script setup>
import {ref} from "vue";

defineProps(["medicamant"]);
const afficherModif = ref(false);
const medicamentAModifier = ref(null);
const emit = defineEmits(["eventDeleteItem", "eventModifQteItem", "eventModifier"]);

function ouvrirModif(medicament) {
  afficherModif.value = true;
  medicamentAModifier.value = { ...medicament };
}

function fermerModif() {
  afficherModif.value = false;
  medicamentAModifier.value = null;
}

function validerModification() {
  afficherModif.value = false;
  emit('eventModifier', medicamentAModifier.value);
}

</script>

<template>
  <div class="item">
    <button @click="$emit('eventDeleteItem', medicamant.id)">Supprimer</button>
    <button @click="ouvrirModif(medicamant)">Modifier</button>


  <div v-if="afficherModif" class="modif">
    <form @submit.prevent="validerModification">
      <h3>Modifier Médicament</h3>
      <input type="text" v-model="medicamentAModifier.denomination" placeholder="Nom" />
      <input type="text" v-model="medicamentAModifier.formepharmaceutique" placeholder="Forme" />
      <input type="number" v-model="medicamentAModifier.qte" placeholder="Quantité" />
      <input type="text" v-model="medicamentAModifier.photo" placeholder="Photo" />

      <button type="submit">Valider</button>
      <button type="button" @click="fermerModif">Annuler</button>
    </form>
  </div>

    <div>
      <button @click="$emit('eventModifQteItem', medicamant,medicamant.qte+1)">+1</button>
      <button @click="$emit('eventModifQteItem', medicamant,medicamant.qte-1)">-1</button>
    </div>
  </div>


</template>

<style scoped>

</style>