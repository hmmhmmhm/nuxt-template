<template>
    <div>
        <Card />
    </div>
</template>

<script lang="ts">
    import { VueAPI } from '~/core'
    import { Card } from '~/components'
    import { exampleStore } from '~/store'

    export default VueAPI.defineComponent({
        components: {
            Card,
        },
        setup(props, context) {
            console.log(exampleStore.increment(5));
            return {}
        },
    })
</script>
