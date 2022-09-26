<script lang="ts" setup>

import { onMounted, ref } from 'vue'
import { ApmCanvas } from '../classes/canvas/ApmCanvas'
import { Sitemap } from '../classes/Sitemap'
import MainLoader from '../components/common/MainLoader.vue'
import { newSitemapTemplate } from '../helpers/sitemap-helper'
import { useAppStore } from '../stores/app.store'

const app = useAppStore()
const parentEl = ref()
const canvasEl = ref()
const canvas = new ApmCanvas()

onMounted(() => {
    const rect = parentEl.value.getBoundingClientRect()
    canvas.initialize(canvasEl.value)
    canvas.updateCanvasSize(rect.width, rect.height)

    setTimeout(() => {
        app.setSitemap(new Sitemap(canvas, newSitemapTemplate()))

        app.sitemap.pages.forEach(page => {
            page.update().draw()
        })
    }, 500)
})

</script>

<template>
    <div class="sitemap-editor flex-grow-1" ref="parentEl">
        <canvas ref="canvasEl"></canvas>
        <MainLoader v-if="!app.sitemap"/>
    </div>
</template>

<style scoped lang="scss">

.sitemap-editor {
    overflow: hidden;
}

</style>
