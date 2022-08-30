<svelte:head>
    <title>About</title>
    <meta name="description" content="About this app"/>
</svelte:head>

<script>
    import Card from '../../../attractions/card/card.svelte';
    import Button from "../../../attractions/button/Button.svelte"
    import H1 from "../../../attractions/typography/H1.svelte"
    import AccountIcon from "../../../mdi/AccountIcon.svelte"
    import AbacusIcon from "../../../mdi/AbacusIcon.svelte"
    import AbTestingIcon from "../../../mdi/AbTestingIcon.svelte"

    let loading = false

    function onClick() {
        loading = true
        setTimeout(() => loading = false, 2000)
    }
</script>

<div class="content">
    <H1>Icons</H1>
    <p>
        <AccountIcon size="1.5em" color="green"/>
        dsfds
    </p>
    <div style="display: flex; align-items: center; gap: 0.5em">
        <AccountIcon/>
        <AbacusIcon/>
        <AbTestingIcon/>
        <div>AAAsdfds</div>
    </div>
</div>

<style>
</style>
