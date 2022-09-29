<script lang="ts" setup>
import { computed, nextTick, ref, watch, watchEffect } from 'vue'
import { cssFontSize } from '../../helpers/misc'
import AddBlockIcon from '../../material-design-icons/AddBlock.vue'
import CircleIcon from '../../material-design-icons/Circle.vue'
import ContentDuplicateIcon from '../../material-design-icons/ContentDuplicate.vue'
import DeleteOutlineIcon from '../../material-design-icons/DeleteOutline.vue'
import LinkVariantIcon from '../../material-design-icons/LinkVariant.vue'
import { useAppStore } from '../../stores/app.store'

const app = useAppStore()
const item = computed(() => app.canvas?.selectedItem)
const toolbarEl = ref()

const height = cssFontSize() * 2.25
const top = computed(() => item.value.relTop - height - 5)
const width = computed(() => item.value.relWidth)
const left = ref(0)

watchEffect(async () => {
    let _left = item.value.relLeft
    await nextTick() // wait for dom update
    if (toolbarEl?.value) {
        const rect = toolbarEl.value?.getBoundingClientRect()
        _left = _left + (width.value - rect.width) / 2
    }
    left.value = _left
})

</script>

<template>
    <div class="page-hover-toolbar all-center gap-2"
         ref="toolbarEl"
         :style="{
            left: `${left}px`,
            top: `${top}px`,
            height: `${height}px`,
            borderRadius: `${height / 2}px`,
            minWidth: `${width}px`
         }"
    >
        <a href="">
            <AddBlockIcon/>
        </a>
        <a href="">
            <CircleIcon/>
        </a>
        <a href="">
            <LinkVariantIcon/>
        </a>
        <a href="" v-if="!item.meta.isRoot">
            <ContentDuplicateIcon/>
        </a>
        <div class="separator" v-if="!item.meta.isRoot"></div>
        <a href="" class="text-danger" v-if="!item.meta.isRoot">
            <DeleteOutlineIcon/>
        </a>
    </div>
</template>

<style scoped lang="scss">

.page-hover-toolbar {
    position: absolute;
    padding-inline: 1em;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-0);
    background-color: var(--bg);
    font-size: 1.25em;

    a {
        height: 1em;
    }
}

</style>
