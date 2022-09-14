<svelte:head>
    <title>SvelteKit Sandbox</title>
    <meta name="description" content="Sandbox"/>
</svelte:head>

<script>
    import Card from '../../attractions/card/card.svelte'
    import { page } from '$app/stores'
</script>

<div class="content">
    <ul>
        {#each $page.data.users as user}
            <li>{user.email}</li>
        {/each}
    </ul>

    <Card class="my-4">
        This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
        following into your command line and following the prompts:
    </Card>
</div>

<style>
</style>
