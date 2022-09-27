<script lang="ts" setup>
import { computed } from 'vue'
import { cssFontSize } from '../../helpers/misc'
import { useAppStore } from '../../stores/app.store'

const app = useAppStore()
const item = computed(() => app.canvas?.selectedItem)


const height = cssFontSize() * 2
const left = computed(() => item.value.relLeft)
const top = computed(() => item.value.relTop - height - 3)
const width = computed(() => item.value.relWidth)

</script>

<template>
    <div class="page-hover-toolbar"
         :style="{
            left: `${left}px`,
            top: `${top}px`,
            height: `${height}px`,
         }"
    >
        {{ item.meta.name }}
    </div>
</template>

<style scoped lang="scss">

.page-hover-toolbar {
    position: absolute;
    padding: 1em;
    display: flex;
    gap: 0.5em;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-0);
    background-color: var(--bg);
}

</style>
