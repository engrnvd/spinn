<script lang="ts" setup>
import { reactive } from 'vue'
import AccountIcon from '../../material-design-icons/Account.vue'
import UButton from '../../U/components/UButton.vue'

const variants = reactive([
    'primary',
    'secondary',
    'success',
    'info',
    'danger',
    'light',
    'dark',
])

const alts = reactive(['default', 'outline', 'transparent', 'flat', 'icon'])

</script>

<template>
    <div>
        <div v-for="alt in alts">
            <h2>{{ alt }}</h2>
            <div class="d-flex gap-4">
                <div v-for="color in variants">
                    <UButton :[color]="true" :[alt]="true">
                        <AccountIcon v-if="alt === 'icon'"/>
                        <span v-else>{{ color }}</span>
                    </UButton>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>
