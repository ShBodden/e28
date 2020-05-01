<template>
  <div id="app">
    <img alt="p2 logo" src="./assets/images/p2logo.png" />

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

  mounted: function() {
     


  }
};
</script>

<style lang='scss'>
@import "./assets/css/zipfoods.scss";
</style>
