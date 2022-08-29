<script>
    import WeatherSunnyIcon from "../../mdi/WeatherSunnyIcon.svelte"
    import Button from "../../attractions/button/Button.svelte"
    import WeatherNightIcon from "../../mdi/WeatherNightIcon.svelte"
    import { Storage } from "../../helpers/storage-helper.js"
    import { onMount } from "svelte"

    let isDark = false

    function toggle() {
        isDark = document.documentElement.getAttribute('data-theme') !== 'dark'
        updateUi()
        Storage.set('dark-mode-active', isDark)
    }

    function updateUi() {
        const theme = isDark ? 'dark' : 'light'
        document.documentElement.setAttribute('data-theme', theme)
    }

    onMount(() => {
        isDark = Storage.get('dark-mode-active', false)
        updateUi()
    })
</script>

<Button round on:click={toggle}>
    {#if isDark}
        <WeatherSunnyIcon/>
    {:else}
        <WeatherNightIcon/>
    {/if}
</Button>
