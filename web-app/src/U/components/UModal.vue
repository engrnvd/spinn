<template>
    <transition name="fade">
        <div class="apm-modal-parent all-center" v-show="modelValue">
            <transition name="slide-down">
                <div v-if="modelValue" class="apm-modal shadow" :class="`modal-${size}`">
                    <div class="apm-modal-header p-4">
                        <slot name="header">
                            <h2>{{ title }}</h2>
                        </slot>
                    </div>
                    <div class="apm-modal-body p-4" :class="bodyClass">
                        <slot></slot>
                    </div>
                    <div class="apm-modal-footer d-flex p-4">
                        <slot name="footer">
                            <UButton class="mr-2" @click="ok" :disabled="okDisable">{{ okTitle }}</UButton>
                            <UButton secondary v-if="!okOnly" @click="cancel">{{ cancelTitle }}</UButton>
                        </slot>
                    </div>
                </div>
            </transition>
            <div class="modal-backdrop" @click="cancel"></div>
        </div>
    </transition>
</template>

<script>

import UButton from "./UButton.vue"

export default {
    name: "ApmModal",
    components: { UButton },
    props: {
        title: {},
        modelValue: {},
        okTitle: {
            default: 'Ok'
        },
        cancelTitle: {
            default: 'Cancel'
        },
        dontCloseOnOk: {
            type: Boolean,
            default: false
        },
        okDisable: {
            type: Boolean,
            default: false
        },
        okOnly: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'md',
        },
        bodyClass: {
            type: String,
            default: '',
        },
    },
    methods: {
        ok() {
            this.$emit('ok')
            if (!this.dontCloseOnOk) this.hideModal()
        },
        cancel() {
            this.$emit('cancel')
            this.hideModal()
        },
        hideModal() {
            this.$emit('update:modelValue', false)
        }
    },
}
</script>

<style scoped lang="scss">
.apm-modal-parent {
    min-width: 100vw;
    min-height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
}

.modal-backdrop {
    min-width: 100%;
    min-height: 100%;
    background-color: rgba(33, 33, 33, 0.85);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
}

.apm-modal {
    background-color: var(--bg);
    width: 550px;
    max-width: 96vw;
    border-radius: 0.5em;

    &.modal-sm {
        width: 400px;
    }

    &.modal-lg {
        width: 900px;
    }

    &.modal-xlg {
        width: 1150px;
    }
}

.apm-modal-header {
    border-bottom: 1px solid var(--border-color);
}

.apm-modal-footer {
    border-top: 1px solid var(--border-color);
}

.apm-modal-body {
    max-height: calc(100vh - 13em);
    overflow: auto;
}
</style>
