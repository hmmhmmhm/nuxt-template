<template>
    <div class="card">
        <h2></h2>
        <img
            :src="
                'https://robohash.org/' +
                person.first_name +
                '_' +
                person.last_name
            "
        />
    </div>
</template>

<script lang="ts">
    import type { Person } from '../types'
    import Vue from 'vue'
<<<<<<< HEAD:components/Card.vue

    export default Vue.extend({
        props: {
            person: Object as () => Person,
=======
    
    export default Vue.extend({
        props: {
            person: {
                type: undefined
            }
>>>>>>> 3d4400fe7db2b7dcc5da5419cb1309ff28b60422:client/components/Card.vue
        },
        created() {
            console.log(this.person);
        }
    })
</script>

<style scoped>
    .card {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        padding: 1rem;
        margin: 0.25rem;
        border: 0.25rem solid gainsboro;
    }
</style>
