import Home from "@/views/Home.vue"
import Contact from "@/views/Contact.vue"
import Users from "@/views/Users.vue"
import User from "@/views/User.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    { path: '/', component: Home, name: "Index" },
    { path: '/contact', component: Contact, name: "Contact" },
    { path: '/users', component: Users, name: "Users" },
    { path: '/users/:id', component: User, props: route => ({ id: route.params.id, hideLink: true }), name: "User" }

]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router