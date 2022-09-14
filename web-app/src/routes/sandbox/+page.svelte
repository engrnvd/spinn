<svelte:head>
    <title>SvelteKit Sandbox</title>
    <meta name="description" content="Sandbox"/>
</svelte:head>

<script>
    import Button from "../../attractions/button/Button.svelte"
    import { FetchRequest } from "../../lib/helpers/fetch-request"
    import Card from '../../attractions/card/card.svelte'
    import { page } from '$app/stores'

    let { users } = $page.data

    let req = new FetchRequest('http://localhost:3210/users')
    req.delay = 500
    req.delayFirstRequest = true
    const { loading } = req

    function sendIt() {
        req.send()
    }
</script>

<div class="content">
    <ul>
        {#each users as user}
            <li>{user.email}</li>
        {/each}
    </ul>

    <Button on:click={sendIt}>Get Data</Button>

    <pre>
        url: {req.url}
        loading: {$loading}
        data: {JSON.stringify(req.data)}
    </pre>

    <Card class="my-4">
        This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
        following into your command line and following the prompts:
    </Card>
</div>

<style>
</style>
