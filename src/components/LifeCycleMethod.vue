<template>
  <h1>Life Cycle Methods {{ name }}</h1>
  <!-- <h3>Amrenend dndnd d</h3> -->
  <h3 ref="count">{{ count }}</h3>
  <button @click="count=count+1">Update Count</button>
 <LCMChild v-if="show"/>
 <br>
 <button v-on:click="show=!show">Toggle Child</button>

</template>

<script>
import LCMChild from "./LCMChild"
export default {
  name: "LifeCycleMethod",
  components:{
    LCMChild
  },
  data(){
    console.log("Created");
    return {
      name:'Amrendra',
      count:0,
      show:true
    }
  },
  
  beforeCreate(){
    //alert("beforeCreate");
  },
  created(){
    this.name = "Singh"
    //alert("created");
  },
  beforeMount(){
    // console.log("beforeMount : ", this.name)
    console.log("beforeMount : ", this.$el)
  },
  mounted(){
    console.log("Mounted : ", this.$el)
  },
  beforeUpdate(){
    console.log("beforeUpdate: ",this.$refs['count'].textContent);
  },
  updated(){
    console.log("Updated: ",this.$refs['count'].textContent);
  }
};
</script>

<style scoped>
h1 {
    color: orange;
}
</style>

