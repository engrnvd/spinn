<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
    flat: Boolean,
    outline: Boolean,
    icon: Boolean,
    transparent: Boolean,
    secondary: Boolean,
    success: Boolean,
    info: Boolean,
    danger: Boolean,
    light: Boolean,
    dark: Boolean,
})
</script>

<template>
    <button v-ripple class="u-btn" :class="{
        primary: !secondary,
        flat,
        outline,
        icon,
        transparent,
        secondary,
        success,
        info,
        danger,
        light,
        dark,
    }">
        <slot></slot>
    </button>
</template>

<style lang="scss">
@import "../styles/variables";

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

@mixin btn-outline($color) {
    background-color: transparent;
    border: 2px solid var(--#{$color});
    color: var(--#{$color});
    box-shadow: none;

    &:hover {
        background-color: var(--#{$color});
        color: var(--bg);
        border: none;
    }
}

@mixin btn-variants {
    @each $color, $value in $theme-colors {
        &.#{$color} {
            @include btn-default($color);

            &.icon {
                @include btn-transparent($color);
            }

            &.outline {
                @include btn-outline($color)
            }

            &.transparent {
                @include btn-transparent($color);
            }
        }
    }
}

.u-btn {
    padding: 0 1.5em;
    height: var(--form-element-height);
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    min-width: 6em;
    border-radius: var(--btn-border-radius);
    color: var(--bg);
    box-shadow: var(--shadow-1);
    line-height: 1;
    text-transform: uppercase;

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
        font-size: 1.5em;

        &.compact {
            font-size: 1.25em;
            --form-element-height: 2rem;
        }
    }

    @include btn-variants
}

</style>
