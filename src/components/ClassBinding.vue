<template>
  <h1>Css Binding</h1>
  <h2 :class="applyStyle">Class Binding</h2>
  <button v-on:click="colorfull=!colorfull">Apply Style</button>
</template>
<script>
export default {
  name: "ClassBinding",
  data(){
    return {
      colorfull:true
    }
  },
  computed:{
    applyStyle(){
      return {
        green:this.colorfull,
        err:true,
        other:true
      }
    }
  }
};
</script>

<style scoped>
h1 {
    color: orange;
}
.green {
  background-color: green;
  width: 200px;
  padding: 10px;
}

.err {
  color: red;
}
.other {
  font-size:100px;
}
</style>

