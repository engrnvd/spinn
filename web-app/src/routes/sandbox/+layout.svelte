<script>
    import H1 from "../../attractions/typography/H1.svelte"
    import NavLink from "../../lib/Nav/NavLink.svelte"
    import Button from '../../attractions/button/button.svelte'
    import { navigating, page } from '$app/stores'
    import { goto, afterNavigate } from '$app/navigation'

    afterNavigate(nav => {
        console.log('nav', nav);
        console.log('from', nav?.from?.url?.pathname);
        console.log('to', nav?.to?.url?.pathname);
    })

    function go() {
        goto('/sandbox/icons')
    }
</script>

<div class="content">
    <H1>SvelteKit Sandbox</H1>

    <nav class="nav d-flex align-items-center justify-content-center my-5">
        <NavLink href="/sandbox/buttons">Buttons</NavLink>
        <NavLink href="/sandbox/icons">Icons</NavLink>
        <NavLink href="/sandbox/env">ENV</NavLink>
    </nav>

    <slot></slot>

    <p>
        <Button on:click={go}>Go to Icons</Button>
    </p>

    <p>$navigating: {$navigating ? 'Yes' : 'No'}</p>
    <p>Current page: {$page?.url?.pathname || ''}</p>
</div>

<style>
    .nav {
        gap: 1em;
    }
</style>
