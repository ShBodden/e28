<template>
  <div id="app">
    <img alt="p3 logo" src="./assets/images/p3logo.png" />

    <nav>
      <ul>
        <li v-for="link in links" :key="link">
          <router-link :to="{name: link}" exact>{{link}}</router-link>
        </li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},

  data: function() {
    return {
      links: ["home", "establishments", "add a review"]
    };
  },
  computed: {

  },
  mounted: function() {
    this.$store.dispatch('setEstablishments');
  }
};
</script>

<style lang='scss'>
@import "./assets/css/zipfoods.scss";
</style>
