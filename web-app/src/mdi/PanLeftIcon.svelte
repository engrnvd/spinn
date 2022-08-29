<script>
    import Icon from "../lib/Icon.svelte"

    export let color
    export let size
</script>

<Icon path="M7,8L2.5,12L7,16V8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z" {size} {color}/>
