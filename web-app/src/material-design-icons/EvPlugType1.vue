<template>
  <span :aria-hidden="!title"
        :aria-label="title"
        class="material-design-icon ev-plug-type1-icon"
        role="img"
        v-bind="$attrs"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M12.5 15C12.5 15.28 12.28 15.5 12 15.5S11.5 15.28 11.5 15 11.72 14.5 12 14.5 12.5 14.72 12.5 15M15 10.5C15.28 10.5 15.5 10.28 15.5 10S15.28 9.5 15 9.5 14.5 9.72 14.5 10 14.72 10.5 15 10.5M9 10.5C9.28 10.5 9.5 10.28 9.5 10S9.28 9.5 9 9.5 8.5 9.72 8.5 10 8.72 10.5 9 10.5M13 18.92V20H11V18.92C7.61 18.43 5 15.53 5 12S7.61 5.57 11 5.08V4H13V5.08C16.39 5.57 19 8.5 19 12S16.39 18.43 13 18.92M13 10C13 11.11 13.9 12 15 12S17 11.11 17 10 16.11 8 15 8 13 8.9 13 10M7 10C7 11.11 7.9 12 9 12S11 11.11 11 10 10.11 8 9 8 7 8.9 7 10M9.5 14C9.5 13.17 8.83 12.5 8 12.5S6.5 13.17 6.5 14 7.17 15.5 8 15.5 9.5 14.83 9.5 14M14 15C14 13.9 13.11 13 12 13S10 13.9 10 15 10.9 17 12 17 14 16.11 14 15M16 15.5C16.83 15.5 17.5 14.83 17.5 14S16.83 12.5 16 12.5 14.5 13.17 14.5 14 15.17 15.5 16 15.5Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "EvPlugType1Icon",
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
