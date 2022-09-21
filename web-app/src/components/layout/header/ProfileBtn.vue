<script lang="ts" setup>
import AccountOutlineIcon from '../../../material-design-icons/AccountOutline.vue'
import { useAuthStore } from '../../../stores/auth.store'
import UButton from '../../../U/components/UButton.vue'

const auth = useAuthStore()
</script>

<template>
    <UButton icon @click="auth.modals.login = true">
        <AccountOutlineIcon/>
    </UButton>
</template>

<style scoped lang="scss">
</style>
