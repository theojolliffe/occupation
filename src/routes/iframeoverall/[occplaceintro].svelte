<script>
    import {page} from '$app/stores'

    import LineChart from '/src/charts/components/line/index.svelte';
    import BarChart from '/src/charts/components/bar/index.svelte';

    $: occplace = $page.params.occplaceintro
    $: placecode = occplace.split("-")[1]
    $: occcode = occplace.split("-")[0]

    import * as someDATA from '/src/data/industry_fake.json';

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

    var sum
    var totsum
    $: if (data) {
        console.log('data', data)
        sum = Object.values(data[ind_lu[occcode]]).map(d => d[2021]).reduce((partialSum, a) => partialSum + a, 0)
        // totsum = Object.values(data).map(d => Object.values(d).map(d => d[2021])).flat().reduce((partialSum, a) => partialSum + a, 0)
        totsum = Object.values(data['Total']).map(d => d[2021]).reduce((partialSum, a) => partialSum + a, 0)
        console.log('data', data)
    }


</script>

{#if sum}
    <div>
        <h2>
            {ind_lu[occcode]}
        </h2>
        <p>
            Across England and Wales, {sum} people work in this industry.
        </p>
        <p>
            This accounts for about 1 in { Math.round (1 / (sum/totsum) / 10) * 10 } working people, or about { Math.round (100* (sum/totsum)) }% of the workforce. It's the second largest industry, in terms of people employed.
        </p>
    </div>
{/if}

<div class="bar-cont">
<BarChart bind:data2={data}/>
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
</style>