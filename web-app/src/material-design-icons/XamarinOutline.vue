<template functional>
  <span :aria-hidden="props.decorative"
        :aria-label="props.title"
        :class="[data.class, data.staticClass]"
        class="material-design-icon xamarin-outline-icon"
        role="img"
        v-bind="data.attrs"
        v-on="listeners">
    <svg :fill="props.fillColor"
         class="material-design-icon__svg"
         :width="props.size"
         :height="props.size"
         viewBox="0 0 24 24">
      <path d="M12,12L12.03,11.9L14.58,7.1L14.75,7H16.34L16.5,7.1V7.3L14,12L16.5,16.7V16.9L16.34,17H14.75L14.58,16.9L12.03,12.1L12,12V12.1L9.42,16.9L9.25,17H7.66L7.5,16.9V16.7L10,12L7.5,7.3V7.1L7.66,7H9.25L9.42,7.1L12,11.9V12M22.75,11.07C22.91,11.35 23,11.67 23,12C23,12.33 22.91,12.65 22.75,12.93L18.08,21C17.72,21.62 17.06,22 16.35,22H7.65C6.94,22 6.28,21.62 5.92,21L1.25,12.93C1.09,12.65 1,12.33 1,12C1,11.67 1.09,11.35 1.25,11.07L5.92,3C6.28,2.38 6.94,2 7.65,2H16.35C17.06,2 17.72,2.38 18.08,3L22.75,11.07M20.8,11.25L16.97,4.8C16.68,4.3 16.14,4 15.56,4H8.44C7.86,4 7.32,4.3 7.03,4.8L3.2,11.25C3.07,11.5 3,11.74 3,12C3,12.26 3.07,12.5 3.2,12.75L7.03,19.2C7.32,19.7 7.86,20 8.44,20H15.56C16.14,20 16.68,19.7 16.97,19.2L20.8,12.75C20.93,12.5 21,12.26 21,12C21,11.74 20.93,11.5 20.8,11.25Z">
        <title>{{ props.title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "XamarinOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Xamarin Outline icon"
    },
    decorative: {
      type: Boolean,
      default: false
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
