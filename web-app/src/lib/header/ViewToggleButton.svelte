<script lang="ts">
  import { rotate } from '$lib/transitions/rotate'
  import IconBtn from '../base-components/IconBtn.svelte'

  let view = 'Horizontal'
  $: path = view === 'Horizontal' ? 'M3,3H9V7H3V3M15,10H21V14H15V10M15,17H21V21H15V17M13,13H7V18H13V20H7L5,20V9H7V11H13V13Z' : 'M9,2V8H11V11H5C3.89,11 3,11.89 3,13V16H1V22H7V16H5V13H11V16H9V22H15V16H13V13H19V16H17V22H23V16H21V13C21,11.89 20.11,11 19,11H13V8H15V2H9Z'
  $: angle = view === 'Horizontal' ? -90 : 90
  $: tooltip = (view === 'Horizontal' ? 'Vertical' : 'Horizontal') + ' view'

  function toggle() {
    view = view === 'Horizontal' ? 'Vertical' : 'Horizontal'
  }

</script>

<IconBtn on:click={toggle} {tooltip}>
    <svg viewBox="0 0 24 24" fill="currentColor">
        {#key path}
            <path in:rotate="{{angle}}" out:rotate={{angle: angle * -1}} d={path}></path>
        {/key}
    </svg>
</IconBtn>

<style lang="scss">

</style>
