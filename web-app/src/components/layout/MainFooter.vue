<script lang="ts" setup>
import { RouterLink } from 'vue-router'

</script>

<template>
    <header class="main-header p-4">
        <nav class="main-nav d-flex gap-4">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/projects">Projects</RouterLink>
            <RouterLink to="/dev">Dev</RouterLink>
        </nav>
    </header>
</template>

<style scoped>
</style>
