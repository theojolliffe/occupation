<script>
    import {page} from '$app/stores'

    $: job = $page.params.job

    let prefix

</script>

<div>
    <h2>
        How many people do your job?
    </h2>
    <input placeholder="What do you do?" bind:value={prefix}>
    <p>You are one in 42,000!</p>
    <p>Of the 25 million working people in England and Wales, 620 describe themselves as data journalists.</p>
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