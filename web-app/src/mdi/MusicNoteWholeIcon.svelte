<script>
    import Icon from "../lib/Icon.svelte"

    export let color = 'currentColor'
    export let size = '1em'
</script>

<Icon path="M12 15A2 2 0 1 1 10 17A2 2 0 0 1 12 15M12 13A4 4 0 1 0 16 17A4 4 0 0 0 12 13Z" {size} {color}/>
