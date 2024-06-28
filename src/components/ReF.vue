<template>
  <h1>ReF</h1>
  <input type="text" name="" ref="input">
  <button v-on:click="getData">Click Me</button>
</template>

<script>
export default {
  name: "ReF",
  methods: {
    getData() {
      this.$refs.input.focus();
      let val = this.$refs.input.value;
      console.warn(val);
      this.$refs.input.style.color="red";
    }
  }
};
</script>

<style scoped>
h1 {
  color: orange;
}
</style>
