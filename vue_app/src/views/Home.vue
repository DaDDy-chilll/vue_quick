<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import HomeCard from '@/components/HomeCard.vue'
import JobLists from '@/components/JobLists.vue'
</script>

<template>
  <Hero />
  <HomeCard />
  <JobLists :limit="3" :showButton="true" />
</template>