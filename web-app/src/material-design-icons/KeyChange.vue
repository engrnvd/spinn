<template>
  <span :aria-hidden="!title"
        :aria-label="title"
        class="material-design-icon key-change-icon"
        role="img"
        v-bind="$attrs"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M6.5,2C8.46,2 10.13,3.25 10.74,5H22V8H18V11H15V8H10.74C10.13,9.75 8.46,11 6.5,11C4,11 2,9 2,6.5C2,4 4,2 6.5,2M6.5,5A1.5,1.5 0 0,0 5,6.5A1.5,1.5 0 0,0 6.5,8A1.5,1.5 0 0,0 8,6.5A1.5,1.5 0 0,0 6.5,5M6.5,13C8.46,13 10.13,14.25 10.74,16H22V19H20V22H18V19H16V22H13V19H10.74C10.13,20.75 8.46,22 6.5,22C4,22 2,20 2,17.5C2,15 4,13 6.5,13M6.5,16A1.5,1.5 0 0,0 5,17.5A1.5,1.5 0 0,0 6.5,19A1.5,1.5 0 0,0 8,17.5A1.5,1.5 0 0,0 6.5,16Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "KeyChangeIcon",
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
