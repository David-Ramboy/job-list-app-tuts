<template>
  <div>
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
    }
  }
})
</script>