<script>
    import Icon from "../lib/Icon.svelte"

    export let color = 'currentColor'
    export let size = '1em'
</script>

<Icon path="M3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19M17,12L12,7V10H8V14H12V17L17,12Z" {size} {color}/>
