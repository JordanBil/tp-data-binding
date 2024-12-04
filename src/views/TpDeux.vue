<template>
    <div class="container">
      <!-- Premier input pour afficher ce qui est tapé -->
      <div>
        <label for="input1">Tapez quelque chose : </label>
        <input 
          id="input1" 
          type="text" 
          v-model="inputText" 
          @keyup="updateText"
          placeholder="Tapez ici"
        />
        <p>{{ inputText }}</p>
      </div>
  
      <!-- Deuxième input pour afficher seulement si la touche "Esc" est enfoncée -->
      <div>
        <label for="input2">Tapez quelque chose (ESC pour afficher) : </label>
        <input 
          id="input2" 
          type="text" 
          v-model="escInput" 
          @keyup="checkEscKey" 
          placeholder="Tapez ici"
        />
        <p>{{ escInput }}</p>
      </div>
  
      <!-- Bouton pour déclencher l'alerte -->
      <div>
        <button @click="showAlert">Afficher l'alerte</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const inputText = ref('');
  const escInput = ref('');
  
  // Fonction pour mettre à jour le texte quand quelque chose est tapé
  const updateText = () => {
    // Rien de spécifique à faire ici car v-model s'en charge déjà
  }
  
  // Fonction pour vérifier si la touche "Esc" est pressée
  const checkEscKey = (event) => {
    if (event.key === "Escape") {
      escInput.value = event.target.value;
    }
  }
  
  // Fonction pour déclencher une alerte
  const showAlert = () => {
    alert("ALERTE GENERALE");
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  button {
    margin-top: 10px;
  }
  </style>
  