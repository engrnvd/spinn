<template>
  <span :aria-hidden="!title"
        :aria-label="title"
        class="material-design-icon calendar-account-icon"
        role="img"
        v-bind="$attrs"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M12,10C14,10 15,12.42 13.59,13.84C12.17,15.26 9.75,14.25 9.75,12.25C9.75,11 10.75,10 12,10M16.5,19H7.5V17.88C7.5,16.63 9.5,15.63 12,15.63C14.5,15.63 16.5,16.63 16.5,17.88M19,20H5V9H19M16,2V4H8V2H6V4H5A2,2 0 0,0 3,6V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V6A2,2 0 0,0 19,4H18V2H16Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CalendarAccountIcon",
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
