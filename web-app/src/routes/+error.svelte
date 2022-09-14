<script>
    import { page } from '$app/stores'
    import { dev } from '$app/environment'
</script>

<h1 class="text-center">{$page.status}</h1>
<h2>{$page.error.message}</h2>

{#if dev}
    <pre>{$page.error.stack}</pre>
{/if}


