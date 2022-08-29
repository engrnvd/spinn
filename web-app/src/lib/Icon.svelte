<script lang="ts">
  export let color = 'currentColor'
  export let size = '1em'
  export let path: String
</script>

<svg fill={color}
     class="apm-icon"
     width={size}
     height={size}
     viewBox="0 0 24 24">
    <path d={path}></path>
</svg>

<style>
    svg {
        vertical-align: middle;
    }
</style>
