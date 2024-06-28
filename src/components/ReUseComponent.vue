<template>
  <h1>ReUseComponent</h1>
  <ul>
    <li v-for="item in users" :key="item.name">
      <User :data="item" :getData="getData"/>
    </li>
  </ul>
</template>

<script>
import User from './User.vue'
export default {
  name: "ReUseComponent",
  components: {
    User
  },
  methods: {
    getData(name){
      alert(name);
    }
  },
  data() {
    return {
        users: [
          { name: 'amre', email: 'amre@gmail' },
          { name: 'raj', email: 'raj@gmail' },
          { name: 'sam', email: 'sam@gmail' },
          { name: 'peter', email: 'peter@gmail' }
        ]
      }
  }

};
</script>

<style scoped>
h1 {
  color: orange;
}
</style>
