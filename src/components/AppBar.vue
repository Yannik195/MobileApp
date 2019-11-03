<template>
  <div>
    <v-app-bar class="app-bar" hide-on-scroll fixed app color="primary" dark flat>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>My Mobile App</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </template>
        <span>Search</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{on}">
          <v-btn v-on="on" icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </template>
        <span>Heart</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{on}">
          <v-btn v-on="on" icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <span>More</span>
      </v-tooltip>

    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "AppBar"
};
</script>

<style scoped>
</style>