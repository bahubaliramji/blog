<template>
  <h1>App API Call - User Data</h1>
  <ul class="item" v-for="item in list" :key="item.id">
    <li>{{ item.id }}</li>
    <li>{{ item.email }}</li>
    <li>{{ item.first_name }}</li>
    <li><img :src="item.avatar" alt=""></li>
  </ul>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AppApi',
  data(){
    return {
      list:[]
    }
  },
  async mounted(){
    let result = await axios.get("https://reqres.in/api/users?page=1");
    console.log("api data",result.data.data);
    this.list = result.data.data
  }
}
</script>
<style>
.item {
  display: flex;
}
.item li {
  display: inline-block;
  width: 200px;
  border: 1px solid;
  text-align: center;
  padding: 5px;
}
.item img {
  width: 50px;
}
</style>
