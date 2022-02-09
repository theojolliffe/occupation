<script>
    import {page} from '$app/stores'

    import LineChart from '/src/charts/components/line/index.svelte';

    $: ind = $page.params.rise
    $: console.log('rise', ind)

    $: console.log('$page.url.pathname', $page.url.pathname)

    // $: placecode = occplace.split("-")[1]
    // $: occcode = occplace.split("-")[0]

    import * as someDATA from '/src/data/industry_fake.json';

    $: data = someDATA.default
    // $: console.log('rise data', data[ind_lu[ind]])

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

 var dataNew = []
 let topChange
 $: if (data) {
    let industry = data[ind_lu[ind]]
    Object.keys(industry).forEach(d => {
        dataNew.push({'code': d, 2011: industry[d][2011], 2021: industry[d][2021], 'diff': (industry[d][2021]-industry[d][2011])})
    })
    dataNew = dataNew.sort(function(a, b){return b['diff'] - a['diff']})
    topChange = dataNew[0]
    console.log('ooddmSTAT', topChange)
 }


</script>

{#if topChange}
<div style='margin-bottom: 35px;'>
    <h2>
        {ind} industry booms in the {reg_lu[topChange['code']]}
    </h2>
    <p>
        In the ten years leading up to Census 2021, the {reg_lu[topChange['code']]} saw the greatest rise in the proportion of employed people working in {ind_lu[ind]} (from 3% to 6%).
    </p>
    <p>
        The industry has been growing steadily here since 1981, when 2% of the regional workforce were employed in this industry.
    </p>
</div>
{/if}

<div class="line-cont">
<LineChart industry={data[ind_lu[ind]]} type={'rise'} regHi={topChange['code']}/>
</div>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
    div {
        font-family: 'Open Sans';
        color: white
    }
    .line-cont {
        height: 200px;
        margin: 20px;
    }
</style>