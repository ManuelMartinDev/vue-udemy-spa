<template>
    <div class="user_card">
        <p>{{ name }}</p>
        <p>{{ username }}</p>
        <p>{{ email }}</p>
        <router-link v-if="!hideLink" :to="{ name: 'User', params: { id } }">Ir al usuario {{ id }}</router-link>

    </div>
</template>

<script>
export default {
    props: ['name', 'username', 'email', 'id', 'hideLink'],

}
</script>

<style scoped>
.user_card {
    background-color: #F5F5F5;
    width: 200px;
    border-radius: 7px;
    padding: 1.5rem;
    margin-top: 1rem;
}
</style>