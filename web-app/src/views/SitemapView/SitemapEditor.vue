<script lang="ts" setup>

import { update } from '@tweenjs/tween.js'
import { onMounted, reactive, ref } from 'vue'
import { ApmCanvas } from '@/classes/canvas/ApmCanvas'
import { Sitemap } from '@/classes/Sitemap'
import MainLoader from '@/components/common/MainLoader.vue'
import { newSitemapTemplate } from '@/helpers/sitemap-helper'
import { useAppStore } from '@/stores/app.store'
import AddChildPageBtn from './AddChildPageBtn.vue'
import AddSiblingPageBtn from './AddSiblingPageBtn.vue'
import CollapsePageBtn from './CollapsePageBtn.vue'
import SelectedItemToolbar from './SelectedItemToolbar.vue'

const app = useAppStore()
const parentEl = ref()
const canvasEl = ref()
const canvas = reactive(new ApmCanvas())

const draw = () => {
    app.sitemap.draw()
    requestAnimationFrame(draw)
    update()
}

onMounted(() => {
    const rect = parentEl.value.getBoundingClientRect()
    canvas.initialize(canvasEl.value)
    canvas.updateCanvasSize(rect.width, rect.height)

    setTimeout(() => {
        app.setSitemap(new Sitemap(canvas, newSitemapTemplate()))
        draw()
    }, 500)
})

</script>

<template>
    <div class="sitemap-editor flex-grow-1" ref="parentEl">
        <canvas ref="canvasEl"></canvas>
        <MainLoader v-if="!app.sitemap"/>

        <SelectedItemToolbar v-if="canvas.selectedItem"/>
        <AddChildPageBtn v-if="canvas.hoveredItem && app.hasHoveredPage"/>
        <AddSiblingPageBtn v-if="canvas.hoveredItem && app.hasHoveredPage && !canvas.hoveredItem?.meta?.isRoot"/>
        <CollapsePageBtn v-if="canvas.hoveredItem && app.hasHoveredPage && canvas.hoveredItem?.meta?.children?.length"/>
    </div>
</template>

<style scoped lang="scss">

.sitemap-editor {
    overflow: hidden;
    user-select: none;
    position: relative;
}

</style>
