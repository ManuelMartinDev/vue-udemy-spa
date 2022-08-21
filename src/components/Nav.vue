<template>
    <nav>
        <ul>
            <li>
                <router-link :to="{ name: 'Index' }">Inicio</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Contact' }">Contacto</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Users' }">Usuarios</router-link>
            </li>
        </ul>
    </nav>
</template>

<style>
nav {
    background-color: #F5F5F5;

}

nav ul {
    display: flex;
    list-style: none;
    gap: 1rem;
    padding: 1rem;
}
</style>