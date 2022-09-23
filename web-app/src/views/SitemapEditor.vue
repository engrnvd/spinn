<script lang="ts" setup>

import { onMounted, ref } from 'vue'
import { ApmCanvas } from '../classes/canvas/ApmCanvas'
import { CanvasItem } from '../classes/canvas/CanvasItem'
import MainLoader from '../components/common/MainLoader.vue'
import { cssVar } from '../helpers/misc'
import { newSitemap } from '../helpers/sitemap-helper'
import { useAppStore } from '../stores/app.store'

const app = useAppStore()
const parentEl = ref()
const canvasEl = ref()
const canvas = new ApmCanvas()

onMounted(() => {
    setTimeout(() => {
        app.setSitemap(newSitemap())

        const rect = parentEl.value.getBoundingClientRect()
        canvas.initialize(canvasEl.value)
        canvas.updateCanvasSize(rect.width, rect.height)

        new CanvasItem(canvas, {
            left: 100,
            top: 100,
            width: 400,
            height: 150,
            fillColor: cssVar('--primary'),
            borderRadius: 20,
            borderColor: cssVar('--primary-darker'),
            borderWidth: 5,
            text: 'Hello there!',
            textColor: cssVar('--light'),
            fontSize: 50,
            paddingX: 50,
            paddingY: 50,
        }).draw()

        new CanvasItem(canvas, {
            left: 600,
            top: 100,
            width: 200,
            height: 200,
            fillColor: cssVar('--primary'),
            borderRadius: 220,
            borderColor: cssVar('--primary-darker'),
            borderWidth: 5,
        }).draw()

        new CanvasItem(canvas, {
            left: 30,
            top: 300,
            width: 200,
            height: 200,
            fillColor: cssVar('--primary'),
            borderRadius: 100,
            borderColor: cssVar('--primary-darker'),
            borderWidth: 5,
        }).draw()
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
