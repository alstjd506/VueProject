<template>
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#" @click.prevent="goPrevious">Previous</a></li>
    <li class="page-item" v-for="page in pageArr">
        <a class="page-link" href="#" @click.prevent="goPage(page)">{{ page }}</a></li>
    <li class="page-item"><a class="page-link" href="#" @click.prevent="goNext">Next</a></li>
  </ul>
</nav>
</template>
<script>
export default{
    props : ['currentPage',
            'firstPage',
            'lastPage', //제일 마지막 페이지 번호
            'startIdx', //페이지 그룹내에서 시작
            'endIdx'    
        ],
    data(){
        return {
            
        }
    },
    methods:{
        goPage(page){
            console.log(page)
            this.$emit('go-page', page)
        },
        goPrevious() {
            if (this.currentPage > this.firstPage) {
            this.$emit('go-page', this.currentPage - 1);
            }
        },
        goNext() {
            if (this.currentPage < this.lastPage) {
            this.$emit('go-page', this.currentPage + 1);
            }
        }
    },
    computed:{
        pageArr() {
            const pages = []
            for(let i=this.startIdx; i<=this.endIdx; i++){
                pages.push(i);
            }
            return pages;
        }
    }
}
</script>