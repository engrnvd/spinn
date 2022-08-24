<svelte:head>
    <title>About</title>
    <meta name="description" content="About this app"/>
</svelte:head>

<script>
    import Divider from '../../attractions/divider/divider.svelte';
    import Card from '../../attractions/card/card.svelte';
    import Button from "../../attractions/button/Button.svelte"

    let loading = false

    function toggle() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
        const theme = isDark ? 'light' : 'dark'
        document.documentElement.setAttribute('data-theme', theme)
    }
</script>

<div class="content">
    <h1>About this app</h1>

    <Button {loading} on:click={toggle}>
        click me
    </Button>

    <Divider/>

    <Card>
        This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
        following into your command line and following the prompts:
    </Card>

    <pre>npm create svelte@latest</pre>

    <Card>
        The page you're looking at is purely static HTML, with no client-side interactivity needed.
        Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
        the devtools network panel and reloading.
    </Card>

    <Divider/>

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
