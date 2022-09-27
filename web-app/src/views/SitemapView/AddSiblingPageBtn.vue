<script lang="ts" setup>
import { computed } from 'vue'
import PlusIcon from '../../material-design-icons/Plus.vue'
import { useAppStore } from '../../stores/app.store'
import PageHoverBtn from './PageHoverBtn.vue'

const app = useAppStore()
const item = computed(() => app.canvas?.hoveredItem)

const left = computed(() => item.value.relRight)
const top = computed(() => item.value.relCy)

function onClick() {

}

</script>

<template>
    <PageHoverBtn class="add-sibling-page-btn" :left="left" :top="top">
        <PlusIcon/>
    </PageHoverBtn>
</template>

<style scoped lang="scss">
.add-sibling-page-btn {
    transform: translateX(-50%) translateY(-50%);
}
</style>
