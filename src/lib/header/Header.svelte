<script>
    import Select from "./Select.svelte";
    var selected;
    var options = ['managers', 'administritive', 'sales'];

    function loadOcc(code) {
        console.log('code', code)
    }

</script>

<div>
    <div style="width: 640px; margin: 50px auto;">
        <Select {options} bind:selected search={true} on:select="{() => { if (selected) { loadOcc(selected) }}}"/>
    </div>
</div>

<style>
    :global(select) {
        font-size: 24px;
    }
</style>