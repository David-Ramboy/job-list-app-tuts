<template>
  <div>
    <div v-if="session">
    <button @click="onLogout">Logout</button>

      <header>
        <div class="order">
          <button @click="handleClick('title')">order by title</button>
          <button @click="handleClick('salary')">order by salary</button>
          <button @click="handleClick('location')">order by location</button>
        </div>
      </header>

      <!-- <p>{{ name }} - {{ age }}</p>
      <button @click="changeName('zelda')">change name</button>
      <button @click="changeAge(30)">change name</button> -->
      <!-- <p>{{ me.id }}</p>
      <p>{{ me.location }}</p> -->
      <JobList :jobs="jobs" :order="order" />
    </div>
    <div v-else>
    <button @click="redirectToLogin">Logout</button>
    </div>
</div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import OrderTerm from '../types/OrderTerms';
import Job from '../types/Job'
import JobList from './JobsList.vue'

export default defineComponent({
  components:{JobList},
  props: {
    handleClick:{
      required: true,
      type: Function as PropType<(term:OrderTerm) => void> 
    },
    jobs:{
        required: true,
        type: Array as PropType<Job[]>,
    },
    order: {
        required: true,
        type: String as PropType<OrderTerm>
    },
    session: {
      require: true,
      type: Boolean
    },
    redirectToLogin:{
      required: true,
      type: Function as PropType<() => void> 
    },
    onLogout: {
      required: true,
      type: Function as PropType<()=> void>
    }
  }
})
</script>