<script>
    import Icon from "../lib/Icon.svelte"

    export let color
    export let size
</script>

<Icon path="M12 2A10 10 0 1 1 2 12A10 10 0 0 1 12 2Z" {size} {color}/>
