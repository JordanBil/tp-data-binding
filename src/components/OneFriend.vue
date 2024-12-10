<template>
    <div class="friend">
        <h2>{{ premium === 'abc' ? 'ami premium' : 'ami nul' }}</h2>
  
      <!-- Bouton pour afficher/masquer les détails -->
      <button @click="toggleDetails">
        {{ showDetails ? 'Cacher les détails' : 'Afficher les détails' }}
      </button>
  
      <!-- Affichage conditionnel des détails -->
      <div v-if="showDetails">
        <p>Téléphone: {{ unAmiPhone }}</p>
        <p>Email: {{ unAmiMail }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps(['unAmiName', 'unAmiPhone', 'unAmiMail', 'premium']);

  const showDetails = ref(false);
  
  // Méthode pour afficher/masquer les détails
  const toggleDetails = () => {
    showDetails.value = !showDetails.value;
  };

  const afficherPremiumTest = () => {
    if(props.premium === 'abc'){
        props.premium = 'xyz'
    } else {
        props.premium = 'abc'
    }
  }
  </script>
  
  <style scoped>
  .friend {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
  }
  
  button {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  div {
    margin-top: 10px;
  }
  </style>
  