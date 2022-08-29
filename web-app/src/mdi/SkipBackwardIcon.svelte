<script>
    import Icon from "../lib/Icon.svelte"

    export let color
    export let size
</script>

<Icon path="M20,5V19L13,12M6,5V19H4V5M13,5V19L6,12" {size} {color}/>
