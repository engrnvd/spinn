<script>
    import Icon from "../lib/Icon.svelte"

    export let color = 'currentColor'
    export let size = '1em'
</script>

<Icon path="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" {size} {color}/>
