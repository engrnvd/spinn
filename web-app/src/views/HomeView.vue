<script setup lang="ts">
import { useAppStore } from '../stores/app.store'

const app = useAppStore()
</script>

<template>
    <div class="canvas-parent">
        <pre>{{ app.sitemap }}</pre>
    </div>
</template>
