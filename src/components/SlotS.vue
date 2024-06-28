<template>
  <h1>SlotS</h1>
  <SlotChild data="Amrendra Pratap Singh"/>
  <SlotChild data="Sam"/>
  <SlotChild data="Aman"/>
  <SlotChild><h2>Bahubali</h2></SlotChild>
  <SlotChild><a href="#">Bahubali</a></SlotChild>
  <SlotChild></SlotChild>
  <SlotChild>
    <template v-slot:header>
      <h1 >Peter</h1>
    </template>
    <template v-slot:content>
      <p>A Vue Js Product</p>
    </template>
    <template v-slot:footer>
      <button>Click</button>
    </template>
  </SlotChild>
  <SlotChild>
    <template v-slot:header>
      <h1 >Facebook</h1>
    </template>
    <template v-slot:content>
      <p>A Vue Js Product Face</p>
    </template>
    <template v-slot:footer>
    </template>
  </SlotChild>
</template>

<script>
import SlotChild from './SlotChild.vue'
export default {
  name: "SlotS",
  components:{
    SlotChild
  }
};
</script>

<style scoped>
h1 {
    color: orange;
}
</style>

