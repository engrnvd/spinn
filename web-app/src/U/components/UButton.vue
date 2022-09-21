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
    }">
        <slot></slot>
    </button>
</template>

<style lang="scss">
@import "../styles/variables";
@import "../styles/functions";

@mixin btn-transparent($color, $value) {
    background-color: transparent;
    border: none;
    @if ($color == secondary) {
        color: var(--main-text-color);
    } @else {
        color: var(--#{$color});
    }
    box-shadow: none;

    &:hover {
        background-color: var(--#{$color}-light);
        color: contrastColor($value);
    }

    .ripple {
        background-color: var(--ripple-dark) !important;
    }
}

@mixin btn-outline($color, $value) {
    background-color: transparent;
    border: 2px solid var(--#{$color});
    @if ($color == secondary) {
        color: var(--main-text-color);
        border: 2px solid var(--main-text-color);
    } @else {
        color: var(--#{$color});
        border: 2px solid var(--#{$color});
    }
    box-shadow: none;

    &:hover {
        background-color: var(--#{$color});
        color: contrastColor($value);
        border: none;
    }
}

@mixin btn-variants {
    @each $color, $value in $theme-colors {
        @if ($color != light and $color != dark) {
            &.#{$color} {
                background-color: var(--#{$color});
                color: contrastColor($value);
                border: none;

                &:hover, &:focus {
                    background-color: var(--#{$color}-dark);
                }

                &.icon {
                    @include btn-transparent($color, $value);
                }

                &.outline {
                    @include btn-outline($color, $value);
                }

                &.transparent {
                    @include btn-transparent($color, $value);
                }
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
    border-radius: var(--form-element-border-radius);
    box-shadow: var(--shadow-0);
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
