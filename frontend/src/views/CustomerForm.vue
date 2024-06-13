<template>
    <div>
        <div>
            <div>고객번호 : <input v-model="customer.id" class="form-control form-control-sm" disabled></div>
            <div>고객이름 : <input v-model="customer.name" class="form-control form-control-sm"></div>
            <div>이메일 : <input v-model="customer.email" class="form-control form-control-sm"></div>
            <div>전화번호 : <input v-model="customer.phone" class="form-control form-control-sm"></div>
            <div>주소 : <input v-model="customer.address" class="form-control form-control-sm"></div>
        </div>
        <button v-if="!customer.id" @click="addBtn">등록</button>
        <button v-else @click="modifyBtn">수정</button>
        <button @click="resetBtn">초기화</button>
        <button @click="delBtn">삭제</button>

    </div>
</template>
<script>
import axios from 'axios';
export default {
    props : {
        mem : {type : Object}
    },
    data(){
        return{ customer : { ...this.mem}}
    },
    watch : {
        mem(newQuestion, oldQuestion) {
            this.customer = { ...newQuestion };
        }
    },
    created(){
    },
    methods:{
        addBtn(){
            delete this.customer.id;
            axios.post('/api/customer', this.customer)
            .then(res => {
                this.$emit("go-page", 1 ),
                this.resetBtn()
            })
        },
        modifyBtn(){
            axios.put(`/api/customer/${this.customer.id}`, this.customer)
            .then(res => {
                this.$emit("go-page", 1),
                this.resetBtn()
            })
        },
        resetBtn(){
            this.customer = {}
        },
        delBtn(){
            axios.delete(`/api/customer/${this.customer.id}`)
            .then(res=> {
                this.$emit('go-page', 1),
                this.resetBtn()
            })
        },
        check(){
            if(!this.customer.name){
                return false;
                alert("이름을 입력하세요")
            }else if(!this.customer.mail){
                return false;
                alert("이메일을 입력하세요")
            }else if(!this.customer.phone){
                return false;
                alert("전화번호를 입력하세요")
            }else{
                return true;
            }
        }
    }
}
</script>
<style>
</style>