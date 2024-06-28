<template>
  <h1 v-if="show">If Else Condition</h1>
  <h1 v-else>Else Condition 2</h1>
  <button v-on:click="show=!show">Togle</button>
</template>

<script>
export default {
  name: "IfElse",
  data(){
    return {
      show:false
    }
  }
};
</script>

<style scoped>
h1 {
    color: orange;
}
</style>