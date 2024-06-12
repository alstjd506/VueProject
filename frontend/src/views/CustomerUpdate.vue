<template>
    <div>
        <h1>고객정보 수정</h1>
        <div>
            <div>고객번호 : <input v-model="mem.id" disabled></div>
            <div>고객이름 : <input v-model="mem.name"></div>
            <div>이메일 : <input v-model="mem.email"></div>
            <div>전화번호 : <input v-model="mem.phone"></div>
            <div>주소 : <input v-model="mem.address"></div>
            <button @click="updateBtn">수정</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){return{
        mem : []
    }},
    created(){
        const memId = this.$route.params.id;
        console.log(memId)
        axios.get(`/api/customer?id=${memId}`)
        .then(res => {
            this.mem = res.data;
        })
    },
    methods:{}
    }
</script>
<style>
</style>