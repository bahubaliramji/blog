<template>
  <h1>Html Binding</h1>
  <div v-html="tag"></div>
  <div v-html="tag2"></div>
</template>

<script>
export default {
  name: "HtmlBinding",
  data(){
    return {
      tag:"<h3>Amrendra</h3>",
      tag2:"<h3>Amrendra@gmail.com</h3>"
    }
  }
};
</script>

<style scoped>
h1 {
    color: orange;
}
</style>

