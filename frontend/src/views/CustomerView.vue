<template>
    <div class="row">
        <div><h1>고객 관리</h1></div>
        <div class="col-md-12 col-lg-7 border p-3">
            <select v-model="pageUnit" @change="goPage(1)">
                <option>2</option>
                <option>5</option>
                <option>10</option>
            </select>
            <div>
                <span>고객번호</span>
                <span>고객이름</span>
                <span>이메일</span>
                <span>전화번호</span>
                <span>주소</span>
            </div>
            <div v-for="mem in customer" @click="selectCustomer(mem)">
                <span v-text="mem.id"></span>
                <span v-text="mem.name"></span>
                <span v-text="mem.email"></span>
                <span v-text="mem.phone"></span>
                <span v-text="mem.address"></span>
            </div>
            <PagingComponent v-bind="page" @go-page="goPage"/>
        </div>
        <div class="col-md-12 col-lg-5 border">
            <CustomerForm :mem="selectedCustomer" @go-page="goPage"></CustomerForm>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import PagingComponent from "@/components/PagingComponent.vue"
import PageMixin from '../mixin';
import CustomerForm from './CustomerForm.vue';

export default {
    mixins : [PageMixin],
    components: {
        PagingComponent, CustomerForm
    },
    data(){return{
        customer : [],
        page : {},
        pageUnit : 10,
        selectedCustomer : {}
    }},
    created(){
        // axios.get(`api/customer`)
        // .then(res => this.customer = res.data.list),
        // this.page = this.pageCalc(1, this.total)
        this.goPage(1);
    },
    methods:{
        gotoUpdateForm(mem){
            this.$router.push(`/customerUpdate/${mem.id}`)
        },
        async goPage(page){
            let pageUnit = this.pageUnit
            let result = await axios.get(`api/customer?page=${page}&pageUnit=${pageUnit}`)
            this.customer = result.data.list;
            this.page = this.pageCalc(page, result.data.count)
        },
        selectCustomer(mem) {
            this.selectedCustomer = mem;
            console.log(mem);
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