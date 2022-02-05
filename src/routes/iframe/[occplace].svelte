<script>
    import {page} from '$app/stores'

    $: occplace = $page.params.occplace
    $: placecode = occplace.split("-")[1]
    $: occcode = occplace.split("-")[0]
    $: console.log('placecode', placecode)
    $: console.log('occcode', occcode)

    import * as someDATA from '../occupationbyregion.json';

    $: data = someDATA.default.find(e => e.Code == placecode)
    $: console.log("json data", data['All categories: Occupation'])

    var occLU = {
        "managers": "1. Managers, directors and senior officials",
        "professional": "2. Professional occupations",
        "associate": "3. Associate professional and technical occupations",
        "administritive": "4. Administrative and secretarial occupations",
        "skilled": "5. Skilled trades occupations",
        "leisure": "6. Caring, leisure and other service occupations",
        "sales": "7. Sales and customer service occupations",
        "operative": "8. Process plant and machine operatives",
        "elementary": "9. Elementary occupations",
    }

</script>

<div>
    In the {data.region} {data[occLU[occcode]]} people work as {occcode}. This is {Math.round(100*(data[occLU[occcode]]/data['All categories: Occupation']))}% of the regional workforce.
</div>

<style>
    div {
        font-family: sans-serif;
    }
</style>