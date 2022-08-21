<template>
    <div>
        <p>Contador actual es: {{ count }} </p>
        <button @click="incrementCount()">Incrementar contador</button>
    </div>
</template>

<script>

export default {
    name: 'Counter',
    data() {
        return {
            count: 0
        }
    },
    methods: {
        incrementCount() {
            this.count++
        }
    },

}

</script>

<style scoped>
button {
    background-color: red;
}
</style>