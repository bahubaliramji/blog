<template>
  <h1>Computed Property</h1>
  <h2>{{ (dollars*rupeeVal)-discount }}</h2>
  <h2>{{ getResult }}</h2>
  <h2>{{ getResult }}</h2>
  <h2>{{ getResult }}</h2>
  <h2>{{ getResult }}</h2>
  <h2>{{ getResultMethod() }}</h2>
</template>

<script>
export default {
  name: "ComputedProperty",
  data(){
    return {
      dollars:100,
      rupeeVal:70,
      discount:10
    }
  },
  methods:{
    getResultMethod(){
      return (this.dollars*this.rupeeVal)-this.discount
    }
  },
  // for better performance
  computed:{
    getResult(){
      return (this.dollars*this.rupeeVal)-this.discount
    }
  }
};
</script>

<style scoped>
h1 {
    color: orange;
}
</style>

