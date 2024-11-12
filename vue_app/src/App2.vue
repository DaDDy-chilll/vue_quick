<script >
export default {
  data() {
    return {
      name: 'John Doe',
      status:"inactive",
      tasks:['task1','task2','task3'],
      link:'https://www.google.com'
    }
  },
  methods: {
    changeStatus() {
      if(this.status === 'active') {
        this.status = 'pending'
      } else if(this.status === 'pending') {
        this.status = 'inactive'
      } else {
        this.status = 'active'
      }
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


  <!-- v-bind -->
  <!-- <a v-bind:href="link">Google</a> -->
  <a :href="link">Google</a>

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
