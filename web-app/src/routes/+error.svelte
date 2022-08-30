<script>
    import { page } from '$app/stores'
</script>

<h1>
    {$page.status}: Custom Error Page
</h1>

<pre>{$page.error}</pre>
