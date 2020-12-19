<template>
  <div>
    Home
    <FabricCanvas />
  </div>
</template>

<script lang="ts">
import FabricCanvas from "@/views/components/canvas.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    FabricCanvas,
  },
})
export default class App extends Vue {}
</script>
