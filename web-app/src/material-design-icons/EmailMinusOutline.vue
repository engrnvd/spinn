<template>
  <span :aria-hidden="!title"
        :aria-label="title"
        class="material-design-icon email-minus-outline-icon"
        role="img"
        v-bind="$attrs"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M16 18V20H24V18H16M14 19C14 18.66 14.04 18.33 14.09 18H3V8L11 13L19 8V13.09C19.33 13.04 19.66 13 20 13S20.67 13.04 21 13.09V6C21 4.9 20.1 4 19 4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H14.09C14.04 19.67 14 19.34 14 19M19 6L11 11L3 6H19Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "EmailMinusOutlineIcon",
  props: {
    title: {
      type: String,
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {

      default: '1em'
    }
  }
}
</script>
