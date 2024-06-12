<template>
    <div>{{menuno}} : {{ title }}</div>
</template>
<script>
export default {
     props : {'title' : {
                type : String,
                default : '페이지 제목입니다.'
            },
              'menuno' : {
                type : Number,
                default : 1
            }
        }
    }
</script>
<style></style>