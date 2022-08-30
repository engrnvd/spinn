<script>
    import Icon from "../lib/Icon.svelte"

    export let color = 'currentColor'
    export let size = '1em'
</script>

<Icon path="M 11,4L 13,4L 13,15L 11,15L 11,4 Z M 13,18L 13,20L 11,20L 11,18L 13,18 Z" {size} {color}/>
