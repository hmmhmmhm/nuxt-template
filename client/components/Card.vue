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
    import * as VueAPI from '@vue/composition-api'
    import type { Person } from '../types'

    export default VueAPI.defineComponent({
        props: {
            person: Object as () => Person,
        },
        setup(props, context) {
            console.log(props.person)
        },
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
