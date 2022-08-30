<script>
    import Icon from "../lib/Icon.svelte"

    export let color = 'currentColor'
    export let size = '1em'
</script>

<Icon path="M4,5V11H21V5M4,18H21V12H4V18Z" {size} {color}/>
