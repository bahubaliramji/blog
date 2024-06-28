<template>
  <h1>PropS</h1>
  <StudenT :name="name"/>
  <TeacheR name="Peter"/>
</template>

<script>
import StudenT from './StudenT.vue'
import TeacheR from './TeacheR.vue'
export default {
  name: "PropS",
  data(){
    return {
      name: "Sam"
    }
  },
  components:{
    StudenT,
    TeacheR
  }
};
</script>

<style scoped>
h1 {
    color: orange;
}
</style>

