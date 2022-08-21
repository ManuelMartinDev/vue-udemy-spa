<template>
  <Nav></Nav>
  <router-view></router-view>
</template>

<script>
import Counter from "@/components/Counter.vue"
import Users from "@/components/Users.vue"
import Nav from "@/components/Nav.vue"
export default {
  name: 'App',
  components: {
    Counter,
    Users,
    Nav
  },

}

</script>