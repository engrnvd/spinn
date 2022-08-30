<script lang="ts">
  import { page } from '$app/stores'

  export let href: String = ''
</script>

<a {href} class:active={$page.url.pathname === href}>
    <slot></slot>
</a>
