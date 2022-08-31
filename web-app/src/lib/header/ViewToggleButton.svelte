<script>
    import SitemapIcon from "../../mdi/SitemapIcon.svelte"
    import FileTreeIcon from "../../mdi/FileTreeIcon.svelte"
    import Button from "../../attractions/button/Button.svelte"

    let view = 'horizontal'

    function toggle() {
        view = view === 'horizontal' ? 'vertical' : 'horizontal'
    }

</script>

<Button round on:click={toggle} small>
    {#if view === 'horizontal'}
        <FileTreeIcon/>
    {:else}
        <SitemapIcon/>
    {/if}
</Button>
