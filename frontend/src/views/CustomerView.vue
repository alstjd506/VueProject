<template>
    <div>
        <div><h1>고객 관리</h1></div>
        <RouterLink to="/customerForm">고객등록</RouterLink> |
        <div>
            <span>고객번호</span>
            <span>고객이름</span>
            <span>이메일</span>
            <span>전화번호</span>
            <span>주소</span>
        </div>
        <div v-for="mem in customer" :key="mem.id">
            <span @click="gotoUpdateForm(mem)" v-text="mem.id"></span>
            <span v-text="mem.name"></span>
            <span v-text="mem.email"></span>
            <span v-text="mem.phone"></span>
            <span v-text="mem.address"></span>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){return{
        customer : []
    }},
    created(){
        axios.get("api/customer")
        .then(res => this.customer = res.data)
    },
    methods:{
        gotoUpdateForm(mem){
            this.$router.push(`/customerUpdate/${mem.id}`)
        }
    }
    }
</script>
<style>
span {
    display: inline-block;
    width: 20%;
    cursor: pointer;
}
</style>