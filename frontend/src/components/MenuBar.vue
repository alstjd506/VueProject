<template>
    <div>
        <ul>
            <li v-for="ele in menu">{{ele}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    props : {
        'menu' : {type : Object}
    }
}
</script>
<style></style>