<script setup>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import HomeCard from '@/components/HomeCard.vue'
import JobLists from '@/components/JobLists.vue'
</script>

<template>
<Navbar />
<Hero />
<HomeCard />
<JobLists :limit="3" :showButton="true" />
</template>
