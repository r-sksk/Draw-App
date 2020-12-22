<template>
  <div class="l-main">
    <div class="p-home">
      <App />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import App from "@/views/components/app.vue"

@Component({
  components: {
    App,
  },
})
export default class Home extends Vue {}
</script>
