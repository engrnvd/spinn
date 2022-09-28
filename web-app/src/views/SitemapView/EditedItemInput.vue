<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue'
import { DebounceFn } from '../../helpers/misc'
import { useAppStore } from '../../stores/app.store'

const changeFn = new DebounceFn(100)
const app = useAppStore()
const inputEl = ref()

const item = computed(() => app.canvas?.editedItem)
const fontSize = computed(() => item.value.fontSize * app.canvas.zoom.scale)
const styles = computed(() => ({
    left: item.value.relLeft + 'px',
    top: item.value.relTop + 'px',
    width: item.value.relWidth + 'px',
    paddingInline: (item.value.paddingX * app.canvas.zoom.scale) + 'px',
    paddingBlock: (item.value.paddingY * app.canvas.zoom.scale) + 'px',
    fontSize: (item.value.fontSize * app.canvas.zoom.scale) + 'px',
    borderRadius: (item.value.borderRadius * app.canvas.zoom.scale) + 'px',
    height: (fontSize.value + item.value.paddingY * 2 * app.canvas.zoom.scale) + 'px',
}))

watchEffect(() => {
    if (!item.value || !inputEl.value) return
    inputEl.value.focus()
    setTimeout(() => inputEl.value.setSelectionRange(0, item.value.meta.name.length))
})

function close() {
    return app.canvas.setEditedItem(null)
}

function onChange(e) {
    changeFn.run(() => {
        const existingValue = item.value.meta.name
        const newValue = e.target.value
        if (existingValue === newValue) return close()

        console.log('existingValue, newValue', existingValue, newValue)
        setTimeout(close)
    })
}

</script>

<template>
    <input
        ref="inputEl"
        class="edited-item-input"
        :value="item.meta.name"
        :style="styles"
        @change="onChange"
        @keydown.enter="onChange"
        @keydown.esc="close"
    />
</template>

<style scoped lang="scss">

.edited-item-input {
    position: absolute;
    border: none;
    outline: none;
}

</style>