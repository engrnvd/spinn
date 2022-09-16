<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
    flat: Boolean,
    outline: Boolean,
    icon: Boolean,
})
</script>

<template>
    <button v-ripple class="u-btn" :class="{flat, outline, icon}">
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
.u-btn {
    padding: 0 1em;
    height: var(--form-element-height);
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    min-width: 6em;
    background-color: var(--primary);
    border-radius: var(--btn-border-radius);
    color: var(--bg);
    box-shadow: var(--shadow-1);
    line-height: 1;

    &:active {
        box-shadow: none;
    }

    &.flat {
        box-shadow: none;
    }

    &.icon {
        width: var(--form-element-height);
        min-width: initial;
        border-radius: 50%;
    }

    &.outline {
        background-color: transparent;
        border: 2px solid var(--primary);
        color: var(--primary);
        box-shadow: none;

        &:hover {
            background-color: var(--primary);
            color: var(--bg);
            border: none;
        }

        .ripple {
            background-color: rgba(0, 0, 0, 0.2) !important;
        }
    }
}

</style>
