<script>
    import * as someDATA from '/src/data/industry_fake.json';
	import Warning from "./Warning.svelte";
	import ONSHeader from "./ONSHeader.svelte";

    import Select from "./Select.svelte";
    var selected;


    $: options = Object.keys(someDATA.default)

    function loadOcc(code) {
        console.log('code', code)
    }

</script>

<Warning/>
<ONSHeader/>

<div>
    <div style="width: 640px; margin: 50px auto;">
        <Select {options} bind:selected search={true} on:select="{() => { if (selected) { loadOcc(selected) }}}"/>
    </div>
</div>

<style>
    :global(select) {
        font-size: 24px;
    }
    :global(warning) {
        width: 640px;
    }
</style>