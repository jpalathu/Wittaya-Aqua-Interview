<template>
  <v-app>
    <v-main style="background-color:#f2f2f2">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 1px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
}

.customBorder {
  border: 1px solid rgba(181, 185, 185, 1) !important;
}
</style>
