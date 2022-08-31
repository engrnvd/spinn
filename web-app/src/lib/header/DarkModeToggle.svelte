<script>
    import Button from "../../attractions/button/Button.svelte"
    import { Cookie } from "../../helpers/cookie"
    import WhiteBalanceSunnyIcon from "../../mdi/WhiteBalanceSunnyIcon.svelte"
    import MoonIcon from "../../mdi/MoonIcon.svelte"
    import { browser } from "$app/environment"

    let theme = currentTheme()

    function currentTheme() {
        if (browser) return Cookie.get('appTheme')
        return '' // todo: pass data from the server
    }

    function toggle() {
        theme = currentTheme() === 'dark' ? 'light' : 'dark'
        Cookie.set('appTheme', theme)
        document.documentElement.setAttribute('data-theme', theme)
    }

</script>

<Button round on:click={toggle}>
    {#if theme === 'dark'}
        <WhiteBalanceSunnyIcon/>
    {:else if theme === 'light'}
        <MoonIcon/>
    {/if}
</Button>
