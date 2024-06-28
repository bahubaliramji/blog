<template>
  <h1>Form Modifiers (. Operator)</h1>
  <input type="text" v-model.lazy="data">
  <br><br>
  <input type="text" v-model.trim="data">
  <br><br>
  <input type="number" v-model.number.lazy="data">
  <h2>Data is :{{ typeof(data) }} {{ data }}</h2>
</template>

<script>
export default {
  name: "FormModifiers",
  data(){
    return {
      data:''
    }
  }
};

</script>

<style scoped>
h1 {
    color: orange;
}
</style>

