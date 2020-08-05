<template>
    <div>
        <Card />
    </div>
</template>

<script lang="ts">
    // import * as VueAPI from '@vue/composition-api'
    import aa from '~/index'
    import Card from '~/components/Card.vue'
    import type {} from '~/types'

    export default VueAPI.defineComponent({
        components: {
            Card,
        },
        setup(props, context) {
            return {}
        },
    })
</script>
