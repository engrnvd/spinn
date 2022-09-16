<script setup lang="ts">
import MainHeader from './components/layout/MainHeader.vue'
import { RouterView } from 'vue-router'

</script>

<template>
    <MainHeader/>

    <main>
        <RouterView/>
    </main>
</template>
