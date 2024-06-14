<template>
    <div class="row">
        <div ><h1>게시판 화면</h1></div>
        <RouterLink to="/boardInsert">게시글 등록</RouterLink> 
        <div >
            <div>
                <span>번호</span>
                <span>게시글 제목</span>
                <span>글쓴이</span>
            </div>
            <div v-for="b in board" @click="selectBoard(b)">
                <span v-text="b.no"></span>
                <span v-text="b.title"></span>
                <span v-text="b.writer"></span>
            </div>
            <PagingComponent v-bind="page" @go-page="goPage"/>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import PagingComponent from "@/components/PagingComponent.vue"
import PageMixin from '../mixin';
import BoardInfo from './BoardInfo.vue';
import BoardInsert from './BoardInsert.vue';

export default {
    mixins : [PageMixin],
    components: {
        PagingComponent, BoardInfo,BoardInsert
    },
    data(){return{
        board : [],
        page : {},
        pageUnit : 10,
    }},
    created(){
       this.goPage(1)
    },
    methods:{
        async goPage(page){
            let pageUnit = this.pageUnit
            let result = await axios.get(`/api/board?page=${page}&pageUnit=${pageUnit}`)
            this.board = result.data.list;
            this.page = this.pageCalc(page, result.data.count)
        },
        selectBoard(b){
            this.$router.push(`/boardInfo/${b.no}`)
            console.log(b)
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