<script lang="ts">
  import HomeLink from './HomeLink.svelte'
  import DarkModeToggle from './DarkModeToggle.svelte'
  import ProgressBar from './ProgressBar.svelte'
  import ProfileButton from './ProfileButton.svelte'
  import ShareButton from './ShareButton.svelte'
  import SettingsButton from './SettingsButton.svelte'
  import ExportButton from './ExportButton.svelte'
  import ViewToggleButton from './ViewToggleButton.svelte'
</script>

<header class="main-header">
    <ProgressBar/>
    <HomeLink/>
    <h4 class="m-0 text-muted">Untitled</h4>
    <div class="separator"></div>

    <div class="flex-grow-1"></div>
    <ViewToggleButton/>
    <DarkModeToggle/>
    <SettingsButton/>
    <ExportButton/>
    <ShareButton/>
    <div class="separator"></div>
    <ProfileButton/>
</header>

<style lang="scss">
    header {
        display: flex;
        align-items: center;
        padding: 0.5em;
        gap: 0.5em;
    }

    .separator {
        width: 1px;
        height: 1.5em;
        margin: 0 0.5em;
        background-color: var(--light);
    }
</style>
