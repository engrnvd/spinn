<svelte:head>
    <title>Icons</title>
    <meta name="description" content="About this app"/>
</svelte:head>

<script>
    import CogOutlineIcon from "../../../mdi/CogOutlineIcon.svelte"
    import Button from "../../../attractions/button/Button.svelte"
    import H1 from "../../../attractions/typography/H1.svelte"
    import AccountIcon from "../../../mdi/AccountIcon.svelte"
    import AbacusIcon from "../../../mdi/AbacusIcon.svelte"
    import AbTestingIcon from "../../../mdi/AbTestingIcon.svelte"

    let showIcon = true
</script>

<div class="content">
    <H1>Icons</H1>
    <div class="d-flex align-items-center my-4">
        {#if showIcon}
            <CogOutlineIcon size="2.5em"/>
        {/if}
        <Button on:click={e => showIcon = !showIcon}>Toggle</Button>
    </div>
    <div style="display: flex; align-items: center; gap: 0.5em">
        <AccountIcon/>
        <AbacusIcon/>
        <AbTestingIcon/>
    </div>
</div>

<style>
</style>
