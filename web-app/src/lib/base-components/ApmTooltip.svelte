<script>
    import { PopoverPositions } from "../../attractions/popover"
    import Popover from "../../attractions/popover/Popover.svelte"

    export let position = PopoverPositions.BOTTOM
    export let tooltip = ''

</script>


<Popover {position}>
    <slot></slot>
    <div class="tooltip" slot="popover-content">{tooltip}</div>
</Popover>


<style lang="scss">
    .tooltip {
        padding: 0.25rem 0.5rem;
        font-size: 0.8rem;
        line-height: 1;
        color: var(--white);
        background-color: #666e;
        border-radius: 0.25rem;
        white-space: nowrap;
        transition: opacity 200ms ease-in;
        user-select: none;
    }
</style>
