<script>
    import Icon from "../lib/Icon.svelte"

    export let color = 'currentColor'
    export let size = '1em'
</script>

<Icon path="M12,8V4L20,12L12,20V16H4V8H12Z" {size} {color}/>
