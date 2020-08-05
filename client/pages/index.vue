<template>
    <div>
        <Card />
    </div>
</template>

<script lang="ts">
    import { VueAPI } from '~/core'
    import { Card } from '~/components'

    export default VueAPI.defineComponent({
        components: {
            Card,
        },
        setup(props, context) {
            return {}
        },
    })
</script>
