<svelte:head>
    <title>Buttons</title>
    <meta name="description" content="About this app"/>
</svelte:head>

<script>
    import AccountIcon from "../../../mdi/AccountIcon.svelte"
    import IconBtn from "../../../lib/base-components/IconBtn.svelte"
    import Button from "../../../attractions/button/Button.svelte"

    let loading = false

    function onClick() {
        loading = true
        setTimeout(() => loading = false, 2000)
    }
</script>

<div class="d-flex align-items-center gap-4 flex-wrap">
    <IconBtn tooltip="Profile">
        <AccountIcon/>
    </IconBtn>

    <Button filled danger {loading} on:click={onClick}>
        click me
    </Button>
    <Button filled {loading} on:click={onClick}>
        click me
    </Button>
    <Button filled neutral {loading} on:click={onClick}>
        click me
    </Button>
    <Button danger {loading} on:click={onClick}>
        click me
    </Button>
    <Button neutral {loading} on:click={onClick}>
        click me
    </Button>
    <Button {loading} on:click={onClick}>
        click me
    </Button>
    <Button outline danger {loading} on:click={onClick}>
        click me
    </Button>
    <Button outline {loading} on:click={onClick}>
        click me
    </Button>
    <Button outline neutral {loading} on:click={onClick}>
        click me
    </Button>
</div>

