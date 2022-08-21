<template>
    <div class="user__cards">
        <User v-if="users" v-for="user of users" :key="user.id" :name="user.name" :username="user.username"
            :email="user.email" :id="user.id">
        </User>
        <p v-else>Cargando..</p>

    </div>
</template>

<script>
import User from "@/components/User.vue"

export default {
    components: {
        User
    },
    data() {
        return {
            users: null
        }
    },
    async created() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const result = await response.json()
        this.users = result
    }
}
</script>

<style scoped>
.user__cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 0 auto;
}
</style>