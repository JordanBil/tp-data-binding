<template>
    <div class="active-user">
      <h1>{{ user.name }}</h1>
      <h2>{{ user.age }} ans</h2>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  defineProps({
    user: {
      type: Object,
      required: true,
      validator: (value) => {
        return typeof value.name === 'string' && typeof value.age === 'number';
      }
    }
  });
  </script>
  
  <style scoped>
  .active-user {
    background-color: rgb(152, 210, 239);
    color: black;
    padding: 1rem;
    text-align: center;
    border-radius: 8px;
  }
  </style>
  