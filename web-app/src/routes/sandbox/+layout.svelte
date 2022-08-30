<script>
    import H1 from "../../attractions/typography/H1.svelte"
    import NavLink from "../../lib/Nav/NavLink.svelte"
</script>

<div class="content">
    <H1>SvelteKit Sandbox</H1>

    <nav class="nav d-flex align-items-center justify-content-center my-5">
        <NavLink href="/sandbox/buttons">Buttons</NavLink>
        <NavLink href="/sandbox/icons">Icons</NavLink>
    </nav>

    <slot></slot>
</div>

<style>
    .nav {
        gap: 1em;
    }
</style>
