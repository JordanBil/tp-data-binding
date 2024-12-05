<template> 
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
  

      <p
        :class="inputText1 === 'hello' ? 'maclasseHello' : inputText1 === 'world' ? 'maClasseWord' : ''"
        :style="{ display: PVisible ? 'block' : 'none' }"
      >
        Premier paragraphe : {{ inputText1 }}
      </p>
  
   
      <p :style="{ backgroundColor: inputText2 }">
        Deuxième paragraphe : Couleur du fond change selon l'input
      </p>
    
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputText1: "",
        inputText2: "",
        PVisible: true,
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
  