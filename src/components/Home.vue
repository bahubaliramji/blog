<template>
    <h1 v-on:mousemove="testFunction2()">Home component {{ "Hello".length }}</h1>
    <h1>Email {{ email }}</h1>
    <h1>Mobile {{ mobile }}</h1>
    <!-- <h1>Mobile {{ mobile=91929292 }}</h1>
    <h1>Mobile {{ mobile==91929292 }}</h1> -->
    <h1>Name {{ getName("Amre") }}</h1>
    <h1>Name2 {{ getName2() }}</h1>
    <h1>All Data {{ getData() }}</h1>
    <h1>All Data Name {{ getData().name }}</h1>
    <h1>All Data Email {{ getData().email }}</h1>
    <h1>All Data Mobile {{ getData().mobile }}</h1>
    <button v-on:click="testFunction('Button 1 cliked')">Click Me 1</button>
    <button v-on:dblclick="testFunction('Button 2 Double cliked')">Click Me 2</button>
    <h2>{{ count }}</h2>
</template>
<script>
    export default {
        name: "HomePage",
        data(){
            return {
                email : 'amren@gmail.com',
                mobile : '8081350753',
                count : 0,
                getName:function(a){
                    return a
                },
                testFunction2:function(){
                    console.warn("Mouse Move")
                }
            }
        },
        methods:{
            getName2()
            {
                return "Amrenebebebbebe"
            },
            getData()
            {
                return {
                    name:'Ramji',
                    email:'ramjiamrendra@gmail.com',
                    mobile:this.mobile,
                }
            },
            testFunction(text)
            {
                this.count+=1;
                alert(text);
                
            },
        }
    };
</script>
<style scoped>
h1{
    color: orange;
}
</style>