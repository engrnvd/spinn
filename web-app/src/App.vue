<script setup lang="ts">
import { onMounted } from 'vue'
import MainLoader from './components/common/MainLoader.vue'
import MainHeader from './components/layout/header/MainHeader.vue'
import MainFooter from './components/layout/MainFooter.vue'
import { RouterView } from 'vue-router'
import { newSitemap } from './helpers/sitemap-helper'
import { useAppStore } from './stores/app.store'
import LoginModal from './views/LoginModal.vue'

const app = useAppStore()

onMounted(() => {
    setTimeout(() => {
        app.setSitemap(newSitemap())
    }, 2000)
})
</script>

<template>
    <div class="main-container d-flex flex-column">
        <MainHeader/>

        <main class="flex-grow-1 main-content">
            <RouterView/>
        </main>

        <MainFooter/>

        <LoginModal/>

        <MainLoader v-if="!app.sitemap"/>
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
