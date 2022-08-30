<script>
    import H1 from "../../attractions/typography/H1.svelte"
</script>

<div class="content">
    <H1>SvelteKit Sandbox</H1>

    <nav class="nav d-flex align-items-center justify-content-center my-5">
        <a href="/sandbox/buttons">Buttons</a>
        <a href="/sandbox/icons">Icons</a>
    </nav>

    <slot></slot>
</div>

<style>
    .nav {
        gap: 1em;
    }
</style>
