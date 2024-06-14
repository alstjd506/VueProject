<template>
    <div v-if="account">
        {{ account }}
        <button @click="logoutBtn">로그아웃</button>
    </div>
    <div v-else>
        <input v-model="user.userid">
        <input v-model="user.userpw">
        <button type="button" @click="loginBtn">로그인</button>
    </div>
</template>
<script>
import axios from 'axios';
export default{
    data(){
        return {
            user : {userid :'' , userpw:'' },
        }
    },
    computed: {
        account() {
            return this.$store.state.user.userid
        }
    },
    created(){
        // axios.get('/api/account')
        // .then(res => {
        //     this.$store.commit('user', res.data)
        // })
        // .catch(()=> console.log('err'))
    },
    methods:{
        loginBtn(){
            axios.post("/api/login", this.user)
            .then( (res)=> {
                this.$store.commit('user', res.data)
                alert('로그인 성공')
            })
            .catch(() => alert('로그인 실패'))
        },
        logoutBtn(){
            axios.post("/api/logout")
            .then(()=> {
                this.$store.commit('user', {})
                alert('로그아웃 성공')
            })
            .catch(()=> alert('로그아웃 실패'))
        }
    }

}
</script>