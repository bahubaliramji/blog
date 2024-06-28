<template>
  <h1>Teleport Data</h1>
  <teleport to="#teleportFooter">
    <TeleportFooter />
  </teleport>

</template>

<script>
// teleport data
import TeleportFooter from './TeleportFooter.vue'
export default {
  name: "TeleportData",
  components:{
    TeleportFooter
  }
};
</script>

<style scoped>
h1 {
    color: orange;
}
</style>

