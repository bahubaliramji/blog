<template>
  <h1>Pass Data To Child Component</h1>
  <ChildC name="Amrendra Pratap SIngh" :user="user" :getData="getData"/>
</template>

<script>
import ChildC from "./ChildC.vue"
export default {
  name: "ParentComponent",
  components:{
    ChildC
  },
  data(){
    return {
      user:{name:'peter',email:'peter@test.com'}
    }
  },
  methods:{
    getData() {
      console.warn("Parent Function Called");
      alert("Parent Function Called");
    }
  }
};
</script>

<style scoped>
h1 {
    color: orange;
}
</style>

