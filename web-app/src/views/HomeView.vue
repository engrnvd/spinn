<script setup lang="ts">
import { reactive, ref } from 'vue'
import { FetchRequest } from '../helpers/fetch-request'
import HeartIcon from '../material-design-icons/Heart.vue'
import { useAuthStore } from '../stores/auth.store'
import ApmModal from '../U/components/ApmModal.vue'
import UButton from '../U/components/UButton.vue'

let req = reactive(new FetchRequest('http://localhost:3210/users').withProps({
    delay: 500,
    delayFirstRequest: true,
}))

const modalOpened = ref(false)

const auth = useAuthStore()
</script>

<template>
    <div class="p-4">
        <h1>{{ auth.form.email || 'Home!' }}</h1>
        <h2>Home!</h2>
        <h3>Home!</h3>
        <h4>Home!</h4>
        <h5>Home!</h5>
        <h6>Home!</h6>
        <p>Home!</p>
        <div class="my-2">
            <UButton @click="req.send()">Click me</UButton>
        </div>
        <div class="my-2">
            <UButton secondary flat @click="modalOpened = true">Open Modal</UButton>
        </div>
        <div class="my-2">
            <UButton outline>Click me</UButton>
        </div>
        <div class="my-2">
            <UButton icon>
                <HeartIcon/>
            </UButton>
            <UButton icon class="compact">
                <HeartIcon/>
            </UButton>
        </div>
        <div class="my-2">
            <UButton transparent>Transparent</UButton>
        </div>

        <ApmModal v-model="modalOpened" title="Log in">
            <input type="text" v-model="auth.form.email">
        </ApmModal>
    </div>
</template>
