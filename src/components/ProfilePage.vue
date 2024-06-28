<template>
  <h1>{{profile}}'s Profile Page Route</h1>
</template>

<script>
import {useRoute} from 'vue-router'
export default {
  name: "ProfilePage",
  data(){
    return {
      profile:''
    }
  },
  mounted(){
    const route=useRoute();
    console.warn("route", route.params);
    this.profile = route.params.name
  }

};
</script>

<style scoped>
h1 {
    color: orange;
}
</style>

