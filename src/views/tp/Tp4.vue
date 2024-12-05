<template>
    <div id="app">
      <div>
        <input
          v-model="inputText1"
          type="text"
          placeholder="Tapez 'hello' ou 'world'"
        />
        <input
          v-model="inputText2"
          type="text"
          placeholder="Tapez une couleur (ex: red, green, etc.)"
        />
      </div>
  
      <button @click="toggleP">Afficher / Cacher le paragraphe</button>
  
      <!-- Premier paragraphe avec style dynamique pour afficher/masquer -->
      <p
        :class="inputText1 === 'hello' ? 'maclasseHello' : inputText1 === 'world' ? 'maClasseWord' : ''"
        :style="{ display: PVisible ? 'block' : 'none' }"
      >
        Premier paragraphe : {{ inputText1 }}
      </p>
  
      <!-- Deuxième paragraphe avec changement dynamique de la couleur de fond -->
      <p :style="{ backgroundColor: inputText2 }">
        Deuxième paragraphe : Couleur du fond change selon l'input
      </p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputText1: "",
        inputText2: "",
        PVisible: true, // Pour afficher/masquer le premier paragraphe
      };
    },
    methods: {
      toggleP() {
        this.PVisible = !this.PVisible;
      },
    },
  };
  </script>
  
  <style scoped>
  .maclasseHello {
    color: blue;
    font-weight: bold;
  }
  
  .maClasseWord {
    color: green;
    font-style: italic;
  }
  </style>
  