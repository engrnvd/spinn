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
@mixin btn-default($color) {
    background-color: var(--#{$color});
    border: none;

    &:hover {
        background-color: var(--#{$color}-dark);
    }
}

@mixin btn-transparent($color) {
    background-color: transparent;
    border: none;
    color: var(--#{$color});
    box-shadow: none;

    &:hover {
        background-color: var(--#{$color}-lighter);
    }

    .ripple {
        background-color: var(--ripple-dark) !important;
    }
}

.u-btn {
    padding: 0 1em;
    height: var(--form-element-height);
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    min-width: 6em;
    border-radius: var(--btn-border-radius);
    color: var(--bg);
    box-shadow: var(--shadow-1);
    line-height: 1;

    @include btn-default(primary);

    &:active {
        box-shadow: none;
    }

    &.flat {
        box-shadow: none;
    }

    &.icon {
        width: var(--form-element-height);
        height: var(--form-element-height);
        padding: 0;
        min-width: initial;
        border-radius: 50%;
        @include btn-transparent(primary);
        font-size: 1.5em;

        &.compact {
            font-size: 1.25em;
            --form-element-height: 2rem;
        }
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
    }

    &.transparent {
        @include btn-transparent(primary);
    }
}

</style>
