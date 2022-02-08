<script>
    import {page} from '$app/stores'

    import LineChart from '/src/charts/components/index.svelte';

    $: occplace = $page.params.occplace
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

</script>

<div>
    In the {reg_lu[placecode]} {data[ind_lu[occcode]][placecode][2021]} people work as {occcode}. This is {Math.round(100*(data[ind_lu[occcode]][placecode][2021]/data["Total"][placecode][2021]))}% of the regional workforce.
</div>

<div class="line-cont">
<LineChart />
</div>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
    div {
        font-family: 'Open Sans';
    }
    .line-cont {
        height: 300px;
    }
    :global(html) {
        height: 500px;
    }
</style>