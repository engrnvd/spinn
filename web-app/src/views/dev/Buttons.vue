<script lang="ts" setup>
import { reactive } from 'vue'
import AccountIcon from '../../material-design-icons/Account.vue'
import UButton from '../../U/components/UButton.vue'
import ULoading from '../../U/components/ULoading.vue'

const variants = reactive([
    'primary',
    'secondary',
    'success',
    'info',
    'danger',
])

const alts = reactive(['default', 'transparent', 'flat', 'icon', 'outline'])

</script>

<template>
    <div>
        <div v-for="alt in alts" class="mb-5 pb-4">
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
        <div>
            <h2>loading</h2>
            <div class="d-flex gap-4">
                <div v-for="color in variants">
                    <UButton :[color]="true" loading>
                        {{ color }}
                    </UButton>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>
