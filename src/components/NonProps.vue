<template>
  <h1>Non-Props Data</h1>
  <NonPropsUser data="Some data" id="user-cmp"/>
</template>

<script>
import NonPropsUser from './NonPropsUser.vue'
export default {
  name: "NonProps",
  components:{
    NonPropsUser
  }
};
</script>

<style scoped>
h1 {
    color: orange;
}
</style>

