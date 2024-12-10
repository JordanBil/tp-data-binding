<template>
  <div class="friend-card">
    <h3>{{ unAmiName }}</h3>
    <p>Email : {{ unAmiMail }}</p>
    <p>Téléphone : {{ unAmiPhone }}</p>
    <p>Statut premium : {{ premium ? 'Oui' : 'Non' }}</p>
    <button @click="togglePremiumStatus">Premium</button>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue';

const emit = defineEmits(['mon-event-premium']);

const props = defineProps({
  id: Number,
  unAmiName: String,
  unAmiPhone: String,
  unAmiMail: String,
  premium: Boolean,
});

function togglePremiumStatus() {
  emit('mon-event-premium', props.id);
}
</script>

<style scoped>
.friend-card {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
}
button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
