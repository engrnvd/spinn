<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
    label: String,
    type: {
        type: String,
        default: 'text'
    },
})

</script>

<template>
    <div class="u-input-container">
        <input class="u-input" :type="type" :placeholder="label">
        <label v-if="label">{{ label }}</label>
    </div>
</template>

<style scoped lang="scss">
$uInputPadding: 0.75em;
.u-input-container {
    position: relative;

    label {
        position: absolute;
        top: 50%;
        left: $uInputPadding;
        transform: translateY(-50%);
        transition: transform 0.2s ease-out;
        transform-origin: 0 0;
        pointer-events: none;
    }
}

.u-input {
    border: 2px solid var(--border-color);
    border-radius: var(--border-radius);
    height: var(--form-element-height);
    padding: $uInputPadding;
    outline: none;
    background-color: var(--bg);
    color: var(--main-text-color);
    transition: border-color 0.2s ease-out;

    &::placeholder {
        color: transparent;
    }

    &:focus {
        border-color: var(--primary);
    }

    &:focus, :not(&:placeholder-shown) {
        & + label {
            transform: translateY(-1.6em) scale(0.8);
            background-color: var(--bg);
            color: var(--primary);
            display: inline-block;
            padding-inline: 0.25em;
        }
    }
}

</style>
