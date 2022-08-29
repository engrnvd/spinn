<script>
    import Icon from "../lib/Icon.svelte"

    export let color
    export let size
</script>

<Icon path="M16,18H18V6H16M6,18L14.5,12L6,6V18Z" {size} {color}/>
