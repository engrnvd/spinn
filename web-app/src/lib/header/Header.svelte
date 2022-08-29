<script lang="ts">
  import HomeLink from './HomeLink.svelte'
  import DarkModeToggle from './DarkModeToggle.svelte'
</script>

<header>
    <HomeLink/>
    <div class="flex-grow-1"></div>
    <DarkModeToggle/>
</header>

<style>
    header {
        display: flex;
        align-items: center;
    }
</style>
