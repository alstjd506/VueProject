<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <PageTitle title="컴포넌트 사용 예제"></PageTitle>

    <!--배열 전달-->
    <MenuBar :menu="['신발','상의','하의']"></MenuBar>
    <HelloWorld :user="{username:'choi', msg:'hi'}"/>

    <FootTitle>카피라이트</FootTitle>

    <!--부모가 자식 컴포넌트 이벤트 직접 발생-->
    <childComponent ref="child_component"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PageTitle from '@/components/PageTitle.vue'
import MenuBar from '@/components/MenuBar.vue'
import FootTitle from '@/components/FooterTitle.vue'
import childComponent from '@/components/ChildComponent.vue'


export default {
  name: 'HomeView',
  components: {
    HelloWorld, PageTitle, MenuBar , FootTitle, childComponent
  },
  data(){
    return { user:{username:'choi', msg:'hi'}}
  },
  mounted(){
    // 자식 컴포넌트 이벤트 발생
    //console.log(this.$refs.child_component.$refs.btn.click);

    //자식 컴포넌트 함수 직접 호출
    this.$refs.child_component.childFunc();
    this.$refs.child_component.$refs.username.focus();
  }
}
</script>
