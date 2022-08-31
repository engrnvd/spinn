<script lang="ts">
  import HomeLink from './HomeLink.svelte'
  import DarkModeToggle from './DarkModeToggle.svelte'
  import ProgressBar from './ProgressBar.svelte'
  import ProfileButton from './ProfileButton.svelte'
  import ShareButton from './ShareButton.svelte'
</script>

<header class="main-header">
    <ProgressBar/>
    <HomeLink/>
    <div class="flex-grow-1"></div>
    <DarkModeToggle/>
    <ShareButton/>
    <div class="text-muted">|</div>
    <ProfileButton/>
</header>

<style lang="scss">
    header {
        display: flex;
        align-items: center;
        padding: 0.5em;
        gap: 0.25em;
    }

    .main-header {
        :global(.btn svg) {
            width: 18px;
            height: 18px;
        }
    }
</style>
