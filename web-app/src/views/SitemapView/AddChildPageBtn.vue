<script lang="ts" setup>
import { computed } from 'vue'
import { SitemapPage } from '../../classes/SitemapPage'
import { AddPageCommand } from '../../commands/AddPageCommand'
import { defaultPage } from '../../helpers/sitemap-helper'
import PlusIcon from '../../material-design-icons/Plus.vue'
import { useAppStore } from '../../stores/app.store'
import PageHoverBtn from './PageHoverBtn.vue'

const app = useAppStore()

const item = computed(() => app.canvas?.hoveredItem)
const left = computed(() => item.value.relCx)
const top = computed(() => item.value.relBottom)

function onClick() {
    const parent: SitemapPage = item.value.meta
    parent.addChild()
}

</script>

<template>
    <PageHoverBtn class="add-child-page-btn" :left="left" :top="top" @click="onClick">
        <PlusIcon/>
    </PageHoverBtn>
</template>

<style scoped lang="scss">
.add-child-page-btn {
    transform: translateX(-50%) translateY(-25%);
}
</style>
