<script setup lang="ts">
import MainHeader from './components/layout/MainHeader.vue'
import MainFooter from './components/layout/MainFooter.vue'
import { RouterView } from 'vue-router'

</script>

<template>
    <div class="main-container d-flex flex-column">
        <MainHeader/>

        <main class="flex-grow-1 main-content">
            <RouterView/>
        </main>

        <MainFooter/>
    </div>
</template>

<style lang="scss">

.main-container {
    height: 100vh;
    overflow: hidden;

    .main-content {
        overflow: auto;
    }
}

</style>
