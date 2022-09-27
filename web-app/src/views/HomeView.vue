<script setup lang="ts">
import { useAppStore } from '../stores/app.store'
import SitemapEditor from './SitemapView/SitemapEditor.vue'

const app = useAppStore()
</script>

<template>
    <SitemapEditor/>
</template>
