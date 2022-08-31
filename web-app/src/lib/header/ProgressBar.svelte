<script>
    import ApmProgressBar from "../base-components/ApmProgressBar.svelte"
    import { beforeNavigate, afterNavigate } from '$app/navigation'

    let progress

    beforeNavigate(nav => {
        progress.start()
    })

    afterNavigate(nav => {
        progress.complete()
    })
</script>

<ApmProgressBar bind:this={progress}/>
