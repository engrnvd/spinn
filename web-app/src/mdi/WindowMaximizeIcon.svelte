<script>
    import Icon from "../lib/Icon.svelte"

    export let color = 'currentColor'
    export let size = '1em'
</script>

<Icon path="M4,4H20V20H4V4M6,8V18H18V8H6Z" {size} {color}/>
