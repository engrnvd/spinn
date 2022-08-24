<svelte:head>
    <title>About</title>
    <meta name="description" content="About this app"/>
</svelte:head>

<script>
    import Divider from '../../attractions/divider/divider.svelte';
    import Card from '../../attractions/card/card.svelte';
    import Button from "../../attractions/button/Button.svelte"
    import H1 from "../../attractions/typography/H1.svelte"

    let loading = false

    function toggle() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
        const theme = isDark ? 'light' : 'dark'
        document.documentElement.setAttribute('data-theme', theme)
    }
</script>

<div class="content">
    <H1>About this app</H1>

    <Button {loading} on:click={toggle}>
        click me
    </Button>

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
