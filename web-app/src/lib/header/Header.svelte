<script lang="ts">
  import HomeLink from './HomeLink.svelte'
  import DarkModeToggle from './DarkModeToggle.svelte'
  import ProgressBar from './ProgressBar.svelte'
</script>

<header>
    <ProgressBar/>
    <HomeLink/>
    <div class="flex-grow-1"></div>
    <DarkModeToggle/>
</header>

<style>
    header {
        display: flex;
        align-items: center;
        padding: 0.5em;
    }
</style>
