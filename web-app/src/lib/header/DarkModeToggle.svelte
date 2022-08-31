<script>
    import Button from "../../attractions/button/Button.svelte"
    import { Cookie } from "../../helpers/cookie"
    import { browser } from "$app/environment"
    import { draw } from 'svelte/transition'

    let theme = currentTheme()
    $: path = theme === 'dark' ? 'M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12Z' : 'M22 14.0123C20.7996 14.5109 19.4831 14.7861 18.1023 14.7861C12.4856 14.7861 7.93241 10.2329 7.93241 4.61622C7.93241 3.71168 8.0505 2.83476 8.2721 2C4.58966 3.52929 2 7.16029 2 11.3961C2 17.0128 6.5532 21.566 12.1698 21.566C16.882 21.566 20.8456 18.3612 22 14.0123Z'

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

<Button round on:click={toggle} small>
    <svg class="apm-icon" viewBox="0 0 24 24" fill="none" style="stroke:currentColor; stroke-width: 2">
        {#key path}
            <path in:draw="{{duration: 500}}" d={path}></path>
        {/key}
    </svg>
</Button>
