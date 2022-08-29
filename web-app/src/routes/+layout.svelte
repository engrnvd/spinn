<script lang="ts">
  import Header from '$lib/header/Header.svelte'
  import '../styles/app.scss'
</script>

<Header/>

<main>
    <slot/>
</main>

<footer>
    <p><a href="/about">About</a></p>
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
