import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue'
import JobView from '@/views/JobView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import JobDetails from '@/views/JobDetails.vue'
import AddJobView from '@/views/AddJobView.vue'
import EditJobView from '@/views/EditJobView.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/',name: 'home', component: Home },
        { path: '/jobs',name: 'jobs', component: JobView },
        { path: '/jobs/:id',name: 'job-details', component: JobDetails },
        { path: '/jobs/add',name: 'add-job', component: AddJobView },
        { path: '/jobs/edit/:id',name: 'edit-job', component: EditJobView },
        // { path: '/:pathMatch(.*)*',name: 'not-found', component: NotFoundView }
        { path: '/:catchAll(.*)',name: 'not-found', component: NotFoundView }
    ]
})

export default router