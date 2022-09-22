<script lang="ts" setup>

import { onMounted } from 'vue'
import MainLoader from '../components/common/MainLoader.vue'
import { newSitemap } from '../helpers/sitemap-helper'
import { useAppStore } from '../stores/app.store'

const app = useAppStore()

onMounted(() => {
    setTimeout(() => {
        app.setSitemap(newSitemap())
    }, 2000)
})

</script>

<template>
    <div class="sitemap-editor flex-grow-1">
        <pre>{{ app.sitemap }}</pre>
        <MainLoader v-if="!app.sitemap"/>
    </div>
</template>

<style scoped lang="scss">
</style>
