<template>
    <section>
        <h1 class="header">Nuxt TypeScript Starter</h1>
        <div class="cards">
            <Card
                v-for="person in people"
                :key="person.id"
                :person="person"
            ></Card>
        </div>
    </section>
</template>

<script lang="ts">
    import * as VueAPI from '@vue/composition-api'
    import type { Person } from '../client/types'
    import Card from '~/components/Card.vue'

    export default VueAPI.defineComponent({
        components: {
            Card,
        },
        setup(props, context) {
            const people = VueAPI.reactive<Person[]>([])
            return { people }
        },
    })
</script>

<style scoped>
    .header {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
    }
</style>
