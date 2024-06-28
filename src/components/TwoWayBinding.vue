<template>
    <h1>Two Way Binding</h1>
    <input type="text" v-model="count">
    <h2>{{ count }}</h2>
</template>
<script>
export default {
    name:"TwoWayBinding",
    data(){
        return {
            count:10
        }
    }
}
</script>