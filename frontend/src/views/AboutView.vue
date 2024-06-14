
<template>
  <PageTitle></PageTitle>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="v-text"
  </div>
</template>

<script>
  import PageTitle from '@/components/PageTitle.vue';
  export default {
    components : {PageTitle},
    data(){
      return{
        form:{title:''},
        file : ''
      }
    },
    methods:{
      submitForm(){
        let formData = new FormData();
      }
    }
  }

 </script>