<template>
    <div id="tp7">
      <ActiveUser :user="currentUser" />
      <UserData @update-user="handleUserUpdate" />
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  import ActiveUser from '../../components/ActiveUser.vue';
  import UserData from '../../components/UserData.vue';
  
  const currentUser = reactive({
    name: 'Utilisateur',
    age: 25,
  });
  
  const handleUserUpdate = (updatedUser) => {
    currentUser.name = updatedUser.name;
    currentUser.age = updatedUser.age;
  };
  </script>
  
  <style>
  #tp7 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: rgb(182, 145, 232);
  }
  </style>
  