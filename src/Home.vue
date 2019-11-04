<template>
  <v-app class="content">
    <AppBar/>
    <v-content>
      <Header/>
      <router-view></router-view>
      <LocationCard v-for="post in posts" v-bind:key="post.id" v-bind:post="post" />
    </v-content>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import LocationCard from "./components/LocationCard.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    AppBar,
    LocationCard,
    Header,
  },
  data: () => ({
    posts: [
      {
        id: 1,
        title: "Title1",
        img: "../assets/bridge.jpg"
      },
      {
        id: 2,
        title: "Title2",
        img: "../assets/bridge.jpg"
      },
      {
        id: 3,
        title: "Title3"
      },
      {
        id:4,
        title: "Title4"
      }
    ]
  })
};
</script>

<style>
.content {
  margin: 12px;
}
</style>
