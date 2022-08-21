<template>
    <h1>Estás en la vista del usuario: {{ userId }}</h1>
    <User v-if="user" :name="user.name" :username="user.username" :email="user.email" :id="id" :hideLink="hideLink">
    </User>
    <p v-else>Cargando...</p>
</template>

<script>

import User from "@/components/User.vue"

export default {
    components: { User },
    props: ['id', 'hideLink'],
    data() {
        return {
            user: null,
            userId: this.id
        }
    },
    async created() {

        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${this.userId}`)
        const result = await response.json()
        this.user = result
    }
}
</script>