<script>
    import Icon from "../lib/Icon.svelte"

    export let color = 'currentColor'
    export let size = '1em'
</script>

<Icon path="M3,3H21V21H3V3M5,5V19H19V5H5Z" {size} {color}/>
