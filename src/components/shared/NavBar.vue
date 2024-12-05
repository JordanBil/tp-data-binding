<template>
  <div id="routeurr">
    <router-link 
      class="nav-link" 
      aria-current="page" 
      to="/home" 
      active-class="active"
    >
      Home
    </router-link>
    <router-link 
      class="nav-link" 
      aria-current="page" 
      to="/tp/tp" 
      active-class="active"
    >
      TP
    </router-link>
    <router-link 
      class="nav-link" 
      aria-current="page" 
      to="/tp/tp2" 
      active-class="active"
    >
      TP2
    </router-link>
    <router-link 
      class="nav-link" 
      aria-current="page" 
      to="/tp/tp3" 
      active-class="active"
    >
      TP3
    </router-link>
    <router-link 
      class="nav-link" 
      aria-current="page" 
      to="/tp/tp4" 
      active-class="active"
    >
      TP4
    </router-link>
    <router-link 
      class="nav-link" 
      aria-current="page" 
      to="/exo/exo" 
      active-class="active"
    >
      Exo
    </router-link>
    <router-link 
      class="nav-link" 
      aria-current="page" 
      to="/exo/exo2" 
      active-class="active"
    >
      Exo2
    </router-link>
    <router-link 
      class="nav-link" 
      aria-current="page" 
      to="/exo/exo3" 
      active-class="active"
    >
      Exo3
    </router-link>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  components: { RouterLink },
};
</script>

<style scoped>
#routeurr {
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  margin: 50px;
}

.nav-link {
  border: 1px solid black;
  text-decoration: none;
  padding: 5px 10px;
}

.active {
  background-color: aqua; 
  font-weight: bold;
}
</style>
