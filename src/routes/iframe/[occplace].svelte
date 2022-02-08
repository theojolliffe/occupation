<script>
    import {page} from '$app/stores'

    // import LineChart from '../charts/layercake-MultiLine/src/routes/index.svelte'

    $: occplace = $page.params.occplace
    $: placecode = occplace.split("-")[1]
    $: occcode = occplace.split("-")[0]
    $: console.log('placecode', placecode)
    $: console.log('occcode', occcode)

    import * as someDATA from '../industry_fake.json';
    // import * as someDATA from '../occupationbyregion.json';

    $: data = someDATA.default

    var ind_lu = {'Agriculture': 'Agriculture, forestry and fishing',
 'Mining': 'Mining and quarrying',
 'Manufacturing': 'Manufacturing',
 'Electricity': 'Electricity, gas, steam and air conditioning supply',
 'Water': 'Water supply; sewerage, waste management and remediation activities',
 'Construction': 'Construction',
 'Wholesale': 'Wholesale and retail trade; repair of motor vehicles and motor cycles',
 'Transport': 'Transport and storage',
 'Accommodation': 'Accommodation and food service activities',
 'Information': 'Information and communication',
 'Financial': 'Financial and insurance activities',
 'Real': 'Real estate activities',
 'Professional': 'Professional, scientific and technical activities',
 'Administrative': 'Administrative and support service activities',
 'Public': 'Public administration and defence; compulsory social security',
 'Education': 'Education',
 'Human': 'Human health and social work activities',
 'Total': 'Total'}

    var reg_lu = {'E12000001': 'North East',
 'E12000002': 'North West',
 'E12000003': 'Yorkshire and The Humber',
 'E12000004': 'East Midlands',
 'E12000005': 'West Midlands',
 'E12000006': 'East',
 'E12000007': 'London',
 'E12000008': 'South East',
 'E12000009': 'South West',
 'W92000004': 'Wales',
 'S92000003': 'Scotland',
 'N92000002': 'Northern Ireland'}

 $: console.log("json data", data)
</script>

<div>
    In the {reg_lu[placecode]} {data[ind_lu[occcode]][placecode][2021]} people work as {occcode}. This is {Math.round(100*(data[ind_lu[occcode]][placecode][2021]/data["Total"][placecode][2021]))}% of the regional workforce.
</div>

<div class="line-cont">
<!-- <LineChart /> -->
</div>
<style>
    div {
        font-family: sans-serif;
    }
    .line-cont {
        height: 300px;
    }
</style>