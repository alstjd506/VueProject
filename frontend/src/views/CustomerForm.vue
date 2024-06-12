<template>
    <div>
        <h1>고객 등록</h1>
        <div>
            <div>고객이름 : <input v-model="mem.name"></div>
            <div>이메일 : <input v-model="mem.email"></div>
            <div>전화번호 : <input v-model="mem.phone"></div>
            <div>주소 : <input v-model="mem.address"></div>
            <button @click="addBtn">등록</button>
        </div>

    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){return{
        mem : {}
    }},
    created(){},
    methods:{
        addBtn(){
            const url = 'api/customer'
            axios.post(url, this.mem)
            .then(res => this.$router.push('/customer'))
        }
    }
    }
</script>
<style>
</style>