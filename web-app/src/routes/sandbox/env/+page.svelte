<script>
    import { PUBLIC_SECRET } from '$env/static/public';
    import { page } from '$app/stores';
</script>

<div>
    <p>env.PUBLIC_SECRET: {PUBLIC_SECRET}</p>
    <p>env.SECRET: {$page.data.secret}</p>
</div>
