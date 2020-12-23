<template>
  <div class="l-container">
    <Base />
  </div>
</template>

<style lang="scss">
@import "../../styles/index.scss";
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Base from "@/views/components/base.vue"

@Component({
  components: {
    Base,
  },
})
export default class App extends Vue {}
</script>
