<template>
  <h1>Foor Loop Condition</h1>
  <ul>
    <li v-for="item in technology" :key="item">{{ item }}</li>
  </ul>
  <br>
  <br>
  <ul>
    <li v-for="item in user" :key="item.email">
      Name is : {{ item.name }} and email is : {{ item.email }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "ForLoop",
  data(){
    return {
      technology:['java','php','node','html'],
      user:[
        {
          name:"Amre",
          email:"ramji@gmail.com"
        },
        {
          name:"Sam",
          email:"Sam@gmail.com"
        },
        {
          name:"Ramji",
          email:"ramji@gmail.com"
        },
        {
          name:"Raj",
          email:"Raj@gmail.com"
        },
      ],
    }
  }
};
</script>

<style scoped>
h1 {
    color: orange;
}
</style>