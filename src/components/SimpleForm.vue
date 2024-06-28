<template>
  <h1>Simple Form</h1>
  <p>{{ form }}</p>
  <ul>
    <li v-for="item in error" v-bind:key="item">
      {{ item }} not valid
    </li>
  </ul>
  <form >
    <label for="email">Email:</label>
    <input type="text" placeholder="Enter Email" v-model="form.email">
    <br/>
    <br/>
    <label for="password">Password:</label>
    <input type="password" placeholder="Enter Password" v-model="form.password">
    <br/>
    <br/>
    <select name="" id="" v-model="form.country">
      <option>India</option>
      <option>China</option>
      <option>USA</option>
    </select>
    <br/>
    <br/>
    <h3>Technology</h3>
    <label>PHP:</label>
    <input type="checkbox" value="php" v-model="form.technology">
    <br/>
    <label>Java:</label>
    <input type="checkbox" value="java" v-model="form.technology">
    <br/>
    <label>HTML:</label>
    <input type="checkbox" value="html" v-model="form.technology">
    <br/>
    <br/>
    <h3>Gender</h3>
    <label>Male:</label>
    <input type="radio" value="male" v-model="form.gender">
    <br/>
    <label>Female:</label>
    <input type="radio" value="female" v-model="form.gender">
    <br/>
    <br/>
    <button type="button" v-on:click="login">Login</button>
  </form>

</template>

<script>
export default {
  name: "SimpleForm",
  data(){
    return {
      form:{
        email:'',
        password:'',
        country:'',
        technology:[],
        gender:''
      },
      error:[]
    }
  },
  methods:{
    login(){
      this.error = [];
      for(const item in this.form){
        if(this.form[item]===""||this.form[item].length===0){
          this.error.push(item);
        }
      }
      if(this.error.length===0){
        alert("data Submitted");
      }
      console.log(this.form,this.error)
    }
  }
};
</script>

<style scoped>
h1 {
    color: orange;
}
</style>

