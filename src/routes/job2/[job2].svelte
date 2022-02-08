<script>
    import {page} from '$app/stores'
    import MapChart from '/src/charts/components/svelte-maps-main/src/App.svelte';
    
    $: job = $page.params.job2

    let prefix

</script>

<div>
    <h2>
        Newport has the highest proportion of data journalists
    </h2>
    <div style='width: 35%; float:left; padding-top: 20px;'>
    <p>
        About 1 in 1,140 people in Newport, South Wales, are journalists.
    </p>
        The next highest proportions are found in Fareham, Hampshire, (1 in 1,270) and Barnet, London, (1 in 1,810).
    <p>

    </p>
    </div>
    <div style='height: 200px; width: 60%; float: right'>
        <MapChart/>
    </div>
</div>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
    div {
        font-family: 'Open Sans';
        color: white
    }
    .bar-cont {
        height: 50px;
        margin: 0px;
    }
    h2 {
        margin: 0;
    }
    input {
        background: content-box;
        height: 40px;
        width: 60%;
        margin: 40px 0;
        border-radius: 10px;
        padding-left: 10px;
        color: white;
        opacity: 0.8;
        font-family: 'Open Sans';
        font-size: 18px;
    }
    ::placeholder {
        color: white;
        opacity: 0.6;
        font-family: 'Open Sans';
        font-size: 18px;
    }
</style>