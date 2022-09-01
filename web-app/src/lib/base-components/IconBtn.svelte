<script>
    import Button from '../../attractions/button/Button.svelte'
    import ApmTooltip from './ApmTooltip.svelte'

    export let tooltip = ''
</script>

<ApmTooltip {tooltip}>
    <Button round small iconBtn on:click>
        <slot></slot>
    </Button>
</ApmTooltip>
