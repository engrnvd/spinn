<template functional>
  <span :aria-hidden="props.decorative"
        :aria-label="props.title"
        :class="[data.class, data.staticClass]"
        class="material-design-icon y-combinator-icon"
        role="img"
        v-bind="data.attrs"
        v-on="listeners">
    <svg :fill="props.fillColor"
         class="material-design-icon__svg"
         :width="props.size"
         :height="props.size"
         viewBox="0 0 24 24">
      <path d="M2,2H22V22H2V2M11.25,17.5H12.75V13.06L16,7H14.5L12,11.66L9.5,7H8L11.25,13.06V17.5Z">
        <title>{{ props.title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "YCombinatorIcon",
  props: {
    title: {
      type: String,
      default: "Y Combinator icon"
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
