<template functional>
  <span :aria-hidden="props.decorative"
        :aria-label="props.title"
        :class="[data.class, data.staticClass]"
        class="material-design-icon islam-icon"
        role="img"
        v-bind="data.attrs"
        v-on="listeners">
    <svg :fill="props.fillColor"
         class="material-design-icon__svg"
         :width="props.size"
         :height="props.size"
         viewBox="0 0 24 24">
      <path d="M12.3,2C12.2,2 12.1,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22C15,22 16.7,21 18.5,19.5C13,21 8,17 8,12C8,7 13,3 18.5,4.5C16.86,2.86 14.62,1.96 12.3,2M16.8,6.2L15.3,9.7L11.6,10L14.5,12.5L13.6,16L16.8,14L20,16L19,12.5L22,10L18.3,9.7L16.8,6.2Z">
        <title>{{ props.title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "IslamIcon",
  props: {
    title: {
      type: String,
      default: "Islam icon"
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
