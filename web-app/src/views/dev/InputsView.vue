<script lang="ts" setup>

import { reactive } from 'vue'
import { useValidator } from '../../composables/useValidator'
import UButton from '../../U/components/UButton.vue'
import UInput from '../../U/components/UInput.vue'

const form = reactive({
    email: '',
    password: '',
    re_password: '',
})

const v = useValidator(form, v => {
    v.addRule('email', 'Email is required', () => form.email.length)
    v.addRule('password', 'Password is required', () => form.password.length)
    v.addRule('password', 'Password must have at least 5 characters', () => form.password.length >= 5)
    v.addRule('re_password', 'Passwords must match', () => form.password === form.re_password)
})

</script>

<template>
    <form action="" @submit.prevent="v.validate()">
        <UInput
            class="mb-4" label="Email" v-model="form.email"
            :errors="v.errors.email"
        />
        <UInput
            class="mb-4" v-model="form.password" type="password" label="Password"
            :errors="v.errors.password"
        />
        <UInput
            class="mb-4" v-model="form.re_password" type="password" label="Confirm Password"
            :errors="v.errors.re_password"
        />
        <UButton flat>Login</UButton>
    </form>
</template>

<style scoped lang="scss">
</style>
