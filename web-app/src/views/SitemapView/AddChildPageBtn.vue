<script lang="ts" setup>
import { computed } from 'vue'
import PlusIcon from '../../material-design-icons/Plus.vue'
import { useAppStore } from '../../stores/app.store'
import PageHoverBtn from './PageHoverBtn.vue'

const app = useAppStore()
const item = computed(() => app.canvas?.hoveredItem)

const left = computed(() => item.value.relCx)
const top = computed(() => item.value.relBottom)

function onClick() {

}

</script>

<template>
    <PageHoverBtn class="add-child-page-btn" :left="left" :top="top">
        <PlusIcon/>
    </PageHoverBtn>
</template>

<style scoped lang="scss">
.add-child-page-btn {
    transform: translateX(-50%) translateY(-50%);
}
</style>
