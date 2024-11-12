<script>
import { ref } from "vue";

export default {
  setup() {
      const name = ref('John Doe');
      const status = ref('active');
      const tasks = ref(['task1', 'task2', 'task3']);

      const changeStatus = () => {
        if(status.value === 'active') {
        status.value = 'pending'
      } else if(status.value === 'pending') {
        status.value = 'inactive'
      } else {
        status.value = 'active'
      }
      }

      return {
        name,
        status,
        tasks,
        changeStatus
      }
  }
}
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">user is active</p>
  <p v-else-if="status === 'pending'">user is pending</p>
  <p v-else>user is inactive</p>

  <!-- v-for -->
  <h3>Tasks</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>


  <!-- v-on -->
   <br>
  <!-- <button v-on:click="changeStatus">Change Status</button> -->
  <button @click="changeStatus">Change Status</button>
</template>

<style scoped>
h1 {
  color: red;
}
</style>
