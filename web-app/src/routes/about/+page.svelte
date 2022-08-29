<svelte:head>
    <title>About</title>
    <meta name="description" content="About this app"/>
</svelte:head>

<script>
    import Card from '../../attractions/card/card.svelte';
    import Button from "../../attractions/button/Button.svelte"
    import H1 from "../../attractions/typography/H1.svelte"
    import AccountIcon from "../../mdi/AccountIcon.svelte"
    import AbacusIcon from "../../mdi/AbacusIcon.svelte"
    import AbTestingIcon from "../../mdi/AbTestingIcon.svelte"

    let loading = false

    function onClick() {
        loading = true
        setTimeout(() => loading = false, 2000)
    }
</script>

<div class="content">
    <H1>About this app</H1>

    <Button danger {loading} on:click={onClick}>
        click me
    </Button>
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
    <Card class="my-4">
        This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
        following into your command line and following the prompts:
    </Card>

    <Card>
        The <a href="/todos">TODOs</a> page illustrates SvelteKit's data loading and form handling. Try using
        it with JavaScript disabled!
    </Card>
</div>

<style>
    .content {
        width: 100%;
        max-width: var(--column-width);
        margin: var(--column-margin-top) auto 0 auto;
    }
</style>
