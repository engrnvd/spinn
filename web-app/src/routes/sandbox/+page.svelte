<svelte:head>
    <title>SvelteKit Sandbox</title>
    <meta name="description" content="Sandbox"/>
</svelte:head>

<script>
    import { onMount } from "svelte"
    import { writable } from "svelte/store"
    import Button from "../../attractions/button/Button.svelte"
    import { FetchRequest } from "../../lib/helpers/fetch-request"
    import Card from '../../attractions/card/card.svelte'
    import { page } from '$app/stores'

    let { users } = $page.data

    let req = new FetchRequest('')

    function sendIt() {
        req.send().then(res => {
            console.log('res', res)
            req.data = res
        })
    }

    onMount(() => {
        req.url = 'http://localhost:3210/users'
    })
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
        loading: {req.loading}
        data: {JSON.stringify(req.data)}
    </pre>

    <Card class="my-4">
        This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
        following into your command line and following the prompts:
    </Card>
</div>

<style>
</style>
