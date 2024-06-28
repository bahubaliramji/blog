<template>
  <h1>Child To Parent Data Transfer</h1>
  <h2>{{ childUser }}</h2>
  <Child2 :getUser="getUserName"/>
</template>

<script>
import Child2 from './Child2.vue'
export default {
  name: "ChildToParent",
  components:{
    Child2
  },
  data(){
    return {
      childUser:""
    }
  },
  methods:{
    getUserName(name){
      this.childUser = name
    }
  }
};
</script>

<style scoped>
h1 {
    color: orange;
}
</style>