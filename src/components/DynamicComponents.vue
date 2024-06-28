<template>
  <h1>Dynamic Components</h1>
  <button @click="tab='JavaC'">Load Java</button>
  <button v-on:click="tab='NodeC'">Load Node</button>
  <button @click="tab='PhpC'">Load Php</button>

  <!-- <JavaC/>
  <PhpC/>
  <NodeC/> -->

  <component :is="tab"/>

</template>

<script>
import JavaC from './JavaC.vue';
import PhpC from './PhpC.vue';
import NodeC from './NodeC.vue';
export default {
  name: "DynamicComponents",
  components:{
    JavaC,PhpC,NodeC
  },
  data(){
    return {
      tab:'JavaC'
    }
  }
};
</script>

<style scoped>
h1 {
    color: orange;
}
</style>

