<template>
  <v-app class="content">
    <AppBar />

    <v-content>
      <LocationCard />
      <HelloWorld />
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import AppBar from "./components/AppBar.vue";
import LocationCard from "./components/LocationCard.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    AppBar,
    LocationCard
  },
  data: () => ({
    //
  })
};
</script>

<style>
.content {
  margin: 12px;
}
</style>
