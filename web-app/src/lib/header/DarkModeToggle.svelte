<script>
    import Button from "../../attractions/button/Button.svelte"
    import { Storage } from "../../helpers/storage-helper.js"
    import WhiteBalanceSunnyIcon from "../../mdi/WhiteBalanceSunnyIcon.svelte"
    import MoonIcon from "../../mdi/MoonIcon.svelte"
    import { browser } from "$app/env"

    // todo: get value from cookie instead of local storage
    let isDark = browser ? Storage.get('dark-mode-active', false) : false

    function toggle() {
        isDark = document.documentElement.getAttribute('data-theme') !== 'dark'
        updateUi()
        Storage.set('dark-mode-active', isDark)
    }

    function updateUi() {
        const theme = isDark ? 'dark' : 'light'
        if (browser) document.documentElement.setAttribute('data-theme', theme)
        // todo: handle on server too
    }

    updateUi()
</script>

<Button round on:click={toggle}>
    {#if isDark}
        <WhiteBalanceSunnyIcon/>
    {:else}
        <MoonIcon/>
    {/if}
</Button>
