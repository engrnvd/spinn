<template>
  <span :aria-hidden="!title"
        :aria-label="title"
        class="material-design-icon skew-less-icon"
        role="img"
        v-bind="$attrs"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M17.5,11L15.41,20H10.5L12.59,11H17.5M20,9H11L8,22H17L20,9M4,6L8,2V5H16V7H8V10L4,6Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SkewLessIcon",
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
