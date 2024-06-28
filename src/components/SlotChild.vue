<template>
<!-- <h1>Child Slot</h1> -->
<h2>{{ data }}</h2>
<slot>Child component</slot>
<br>
<slot>Child component 2</slot>

<div class="cart">
    <header>
        <slot name="header">
        </slot>
    </header>
    <content>
        <slot name="content">
        </slot>
    </content>
    <footer>
        <slot name="footer">
            <button>Click Me</button>
        </slot>
    </footer>
</div>

</template>
<script>
export default {
    name:"SlotChild",
    props:{
        data:String
    }
}
</script>

<style>
.cart {
    border: 1px solid;
    text-align: center;
    padding: 20px;
    width: 200px;
}
</style>