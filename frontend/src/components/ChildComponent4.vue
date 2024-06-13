<template>
    <hr/>
    <button @click="sendMessage">클릭</button>
</template>
<script>
export default{
    data(){
        return {
            msg : '자식 컴포넌트로부터 보내는 메시지'
        }
    },
    methods:{
        sendMessage(){
            this.$emit('send-message', this.msg +"!!!")
        }
    },
    mounted(){
       // this.$emit('send-message', this.msg)
    }

}
</script>