<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
    flat: Boolean,
    outline: Boolean,
    icon: Boolean,
    transparent: Boolean,
})
</script>

<template>
    <button v-ripple class="u-btn" :class="{flat, outline, icon, transparent}">
        <slot></slot>
    </button>
</template>

<style lang="scss">
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

    &:hover {
        background-color: var(--primary-dark);
    }

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
            background-color: var(--primary-light);
            color: var(--bg);
            border: none;
        }
    }

    &.transparent {
        background-color: transparent;
        border: none;
        color: var(--primary);
        box-shadow: none;

        &:hover {
            background-color: var(--primary-lighter);
        }

        .ripple {
            background-color: rgba(0, 0, 0, 0.2) !important;
        }
    }
}

</style>
