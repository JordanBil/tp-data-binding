<template>
  <div class="user-data">
    <h3>Formulaire d'édition :</h3><br>
    <form @submit.prevent="updateUser">
      <label>
        Nom :
        <input v-model="userName" type="text" required />
      </label>
      <label>
        Âge :
        <input v-model.number="userAge" type="number" min="0" required />
      </label>
      <button type="submit">MAJ</button>
    </form>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';
import { ref } from 'vue';

const emit = defineEmits(['update-user']); 

const userName = ref('');
const userAge = ref('');

const updateUser = () => {
  if (userName.value && userAge.value >= 0) {
    const updatedUser = {
      name: userName.value,
      age: userAge.value,
    };
    emit('update-user', updatedUser); 
  }
};
</script>

<style scoped>
.user-data {
  background-color: rgb(152, 210, 239);
  padding: 1rem;
  border-radius: 8px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
button {
  align-self: center;
  border: 1px solid black;
}

button:hover{
  background-color: rgb(182, 145, 232);
}
</style>
