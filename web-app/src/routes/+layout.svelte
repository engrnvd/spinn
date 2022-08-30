<script lang="ts">
  import Header from '$lib/header/Header.svelte'
  import '../styles/app.scss'
  import NavLink from '../lib/Nav/NavLink.svelte'
</script>

<Header/>

<main>
    <slot/>
</main>

<footer>
    <p>
        <NavLink href="/sandbox">Sandbox</NavLink>
    </p>
</footer>

<style>
    main {
        padding: 1em;
    }

    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
    }
</style>
