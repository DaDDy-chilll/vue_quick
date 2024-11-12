<script setup>
import { ref,onMounted } from "vue";
const name = ref('John Doe');
const status = ref('active');
const tasks = ref(['task1', 'task2', 'task3']);
const newTask =ref('')
const changeStatus = () => {
  if (status.value === 'active') {
    status.value = 'pending'
  } else if (status.value === 'pending') {
    status.value = 'inactive'
  } else {
    status.value = 'active'
  }
}

const addTask = () => {
  if(newTask.value.trim() !== '') { 
    tasks.value.push(newTask.value)
    newTask.value = ''
  }
}


const deleteTask = (index) => {
  tasks.value.splice(index, 1)
}

</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">user is active</p>
  <p v-else-if="status === 'pending'">user is pending</p>
  <p v-else>user is inactive</p>

  <form @submit.prevent="addTask">
    <label for="newTask">AddNew Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit" @click="addTask">Add Task</button>
  </form>

  <!-- v-for -->
  <h3>Tasks</h3>
  <ul>
    <li v-for="(task,index) in tasks" :key="task" >
      <span>
        {{ task }}
      </span>
      <button @click="deleteTask(index)">X</button>
    </li>
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
