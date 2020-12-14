<template>
  <div class="l-container">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "../../styles/index.scss";
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class App extends Vue {}
</script>
