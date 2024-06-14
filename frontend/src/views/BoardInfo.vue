<template>
    <div>
        <div><h1>게시글 상세화면</h1></div>
        <div>
            <table>
                <tr>
                    <th>번호</th>
                    <td><input v-model="board.no" disabled></td>
                    <th>제목</th>
                    <td><input v-model="board.title"></td>
                    <th>글쓴이</th>
                    <td><input v-model="board.writer"></td>
                </tr>
                <tr>
                    <th>내용</th>
                    <td colspan="4"><input v-model="board.content"></td>
                </tr>
                <tr>
                    <th>첨부파일</th>
                    <td colspan="4"></td>
                </tr>
            </table>
            <button @click="modifyBtn">수정</button>
            <button @click="deleteBtn">삭제</button>           
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return{
            board : []
        }
    },
    created(){
        const boardNo = this.$route.params.no;
        console.log(boardNo)
        axios.get(`/api/board/${boardNo}`)
        .then(res => {
            this.board = res.data[0];
            console.log(this.board)
        })
    },
    methods:{
        modifyBtn(){
            axios.put(`/api/board/${this.board.no}`, this.board)
            .then(() => {
                alert('수정되었습니다.')
                this.$router.push('/board')
            })
        },
        deleteBtn(){
            axios.delete(`/api/board/${this.board.no}`)
            .then(() => {
                this.$router.push('/board')
            })
        }
    }
    }
</script>
<style></style>