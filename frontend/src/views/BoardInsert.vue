<template>
    <div>
        <div><h1>게시글 등록</h1></div>
        <div>
            <table>
                <tr>
                    <th>제목</th>
                    <td><input v-model="board.title"></td>
                    <th>글쓴이</th>
                    <td><input v-model="board.writer"></td>
                </tr>
                <tr>
                    <th>내용</th>
                    <td colspan="3"><input v-model="board.content"></td>
                </tr>
                <tr>
                    <th>첨부파일</th>
                    <td colspan="3"></td>
                </tr>
            </table>
            <button @click="addBtn">등록</button>         
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            board : []
        }
    },
    created(){},
    methods:{
        addBtn(){
            axios.post("/api/board", this.board)
            .then(()=>{
                alert('등록되었습니다.')
                this.$router.push('/board')
            })
        }
    }
}
</script>
<style></style>