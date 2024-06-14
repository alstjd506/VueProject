<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <PageTitle title="컴포넌트 사용 예제"></PageTitle>

    <!--배열 전달-->
    <MenuBar :menu="['신발','상의','하의']"></MenuBar>
    <HelloWorld :user="{username:'choi', msg:'hi'}"/>

    <childComponent ref="child_component"/>
    <!--부모가 자식 컴포넌트 이벤트 직접 발생-->
    <childComponent4 @send-message="sendMessage"></childComponent4>
    
    <!--이름 있는 slot-->
    <SlotUseModalLayout>
      <template v-slot:header>
        헤더 슬롯에 들어갈 내용
      </template>
      <template v-slot:default>
        메인 슬롯에 들어갈 내용
      </template>
      <template v-slot:footer>
        <button>닫기</button>
      </template>
    </SlotUseModalLayout>
    <!--<FootTitle>카피라이트 slot실습</FootTitle>-->
    <hr>
    <ProvideinjectChild></ProvideinjectChild>
    <hr>
    <PagingComponent v-bind="page" @go-page="goPage"/>

  </div>
</template>

<script>
// @ is an alias to /src
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import HelloWorld from '@/components/HelloWorld.vue'
import PageTitle from '@/components/PageTitle.vue'
import MenuBar from '@/components/MenuBar.vue'
import FootTitle from '@/components/FooterTitle.vue'
import childComponent from '@/components/ChildComponent.vue'
import childComponent4 from '@/components/ChildComponent4.vue'
import SlotUseModalLayout from '@/components/SlotUseModalLayout.vue'
import ProvideinjectChild from '@/components/ProvideinjectChild.vue'
import PagingComponent from "@/components/PagingComponent.vue"

export default {
  name: 'HomeView',
  components: {
    HelloWorld, PageTitle, MenuBar , FootTitle, childComponent,
    childComponent4, SlotUseModalLayout, ProvideinjectChild, PagingComponent,
  
  },
  data(){
    return { user:{username:'choi', msg:'hi'},
             page:{}
            }
  },
  created(){
    this.page = this.pageCalc(6, 124,5,10)
    console.log(this.page)
  },
  computed :{
    count(){
      return this.$store.state.count;
    }
  },
  provide(){
    return { itemlength : 4 }
  },
  methods : {
    goPage(page){
      console.log('parent event', page)
    },
    sendMessage(msg) {
      console.log(msg);
    },
    pageCalc(currentPage, total, pageSize = 10, pageUnit = 10) {
      let firstPage = 1;
      let lastPage =
        Math.floor(total / pageUnit) + (total % pageUnit == 0 ? 0 : 1);
      let startIdx = Math.floor((currentPage - 1) / pageSize) * pageSize + 1;
      let endIdx = startIdx + pageSize - 1;
      if (endIdx > lastPage) {
        endIdx = lastPage;
      }
      return {currentPage, firstPage, lastPage, startIdx, endIdx };
    }

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
