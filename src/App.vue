<template>
  <div class="app">
      <router-view :session="session"  :userId="userId" :onLogout="onLogout" :redirectToLogin="redirectToLogin" :handleClick="handleClick" :order="order" :jobs="jobs"></router-view>
  </div>
</template>

<script lang="ts">


import { defineComponent, reactive, ref, toRefs } from 'vue';
import Job from './types/Job'
import OrderTerm from './types/OrderTerms'
import * as Session from "supertokens-auth-react/recipe/session";
import { signIn } from 'supertokens-auth-react/lib/build/recipe/emailpassword';

export default defineComponent({
  name: 'App',
  data() {
    return {
      session: false,
      userId: "",
    };
  },
  setup() {
    // const me: Job = {
    //   title:'software developer',
    //   location:'smesoft',
    //   salary:10,
    //   id:'1233213241'
    // }
    const jobs = ref<Job[]>([
      {title: 'farm worker', location: 'lolon ranch', salary:3000, id: '1'},
      {title: 'quarryman', location: 'death mountain', salary:4000, id: '2'},
      {title: 'farm worker4', location: 'the lost woods', salary:3000, id: '3'},
      {title: 'farm worker2', location: 'lake ', salary:3000, id: '4'},
    ])
    const order = ref<OrderTerm>('title')
    const handleClick = (term: OrderTerm) =>  {
      order.value = term
    }
    // const state = reactive({
    //   name:'link',
    //   age: 255 as string | number
    // })
    // return { ...toRefs(state)}

    // const name = ref('Link')
    // name.value = 'dsaf'
    // const age = ref<number | string>(34)
    // age.value = 34

    // return {name, age}
    // return {me}
    return {jobs, handleClick, order}
    
  },  
   mounted() {
    this.getUserInfo();
  },
  methods: {
    redirectToLogin() {
      window.location.href = "/auth";
    },
    async getUserInfo() {
      this.session = await Session.doesSessionExist();
      if (this.session) {
        this.userId = await Session.getUserId();
      }
    },
    async onLogout() {
      await Session.signOut();
      window.location.href = "/auth";
    },
  },
  // data() {
  //   return {
  //     name: 'Link',
  //     age: 251 as number | string
  //   }
  // },
  // methods: {
  //   changeName(name: string) {
  //     this.name = name
  //     return name
  //   },
  //   changeAge(age: number | string ){
  //     this.age = age
  //     return age
  //   }
  // }
});
</script>

<style>
    header {
    text-align: center;
  }
  header .order {
    margin-top: 20px;
  }
  button {
    margin: 0 10px;
    color: #1195c9;
    border: 3px solid #1195c9;
    background: #d5f0ff;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
</style>
