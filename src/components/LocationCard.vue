<template>
  <v-card class="card mx-auto" max-width="800">
    <v-img class="white--text align-end" height="200px" src="../assets/bridge.jpg">
      <v-card-title>{{post.title}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="secondary" text>Share</v-btn>

      <v-btn color="secondary" text>Explore</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "LocationCard",
  props: ["post"],
  data() {},
  methods: {
    img: function() {
      return this.post.img;
    }
  }
};
</script>

<style scoped>
.card {
  margin-bottom: 12px;
}
</style>