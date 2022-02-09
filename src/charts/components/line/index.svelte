<script>
  import { LayerCake, Svg, Html } from 'layercake';
  import { scaleOrdinal } from 'd3-scale';
  import { timeParse, timeFormat } from 'd3-time-format';
  import { format, precisionFixed } from 'd3-format';

  import MultiLine from './_components/MultiLine.svelte';
  import AxisX from './_components/AxisX.svelte';
  import AxisY from './_components/AxisY.svelte';
  import Labels from './_components/GroupLabels.html.svelte';
  import SharedTooltip from './_components/SharedTooltip.html.svelte';

  // This example loads csv data as json using @rollup/plugin-dsv
  import data from './_data/fruit.csv';

  export let type;
  export let industry;
  export let regHi;
  console.log('reHi', regHi)
  console.log('tpye', type)
  console.log('infudsrt', industry)
  
  $: console.log('data', data)

  var data2 = []
  Object.keys(industry['E12000001']).forEach(d => {
    let ob = {'year': d}
    Object.keys(industry).forEach(e => {
      ob[e] = industry[e][d]
    })
    data2.push(ob)
  })


  $: console.log('data2', data2)

  var datalong2 = []
  Object.keys(industry).forEach(d => {
    let ob = {'region': d}
    let ray = []
    Object.keys(industry[d]).forEach(e => {
      ray.push({value: industry[d][e], year: +e})
    })
    ob['values'] = ray
    datalong2.push(ob)
  })


  $: console.log('datalong2', datalong2)


  // data = data2

  /* --------------------------------------------
   * Set what is our x key to separate it from the other series
   */
  const xKey = 'year';
  const yKey = 'value';
  const zKey = 'region';

  const seriesNames = Object.keys(data[0]).filter(d => d !== xKey);
  const seriesColors = ['#ff00cc', '#ffe4b8', '#ffb3c0', '#ffe4b8', '#ffb3c0', '#ffe4b8', '#ffb3c0', '#ffe4b8', '#ffb3c0']; // '#ff7ac7', 

  const parseDate = timeParse('%Y-%m-%d');

  /* --------------------------------------------
   * Create a "long" format that is a grouped series of data points
   * Layer Cake uses this data structure and the key names
   * set in xKey, yKey and zKey to map your data into each scale.
   */
  const dataLong = seriesNames.map(key => {
    return {
      [zKey]: key,
      values: data.map(d => {
        d[xKey] = typeof d[xKey] === 'string' ? parseDate(d[xKey]) : d[xKey]; // Conditional required for sapper
        return {
          [yKey]: +d[key],
          [xKey]: d[xKey]
        };
      })
    };
  });

  $: console.log('dataLong', dataLong)

  /* --------------------------------------------
   * Make a flat array of the `values` of our nested series
   * we can pluck the field set from `yKey` from each item
   * in the array to measure the full extents
   */
  const flatten = data => data.reduce((memo, group) => {
    return memo.concat(group.values);
  }, []);

  const formatTickX = timeFormat('%b. %e');
  const formatTickY = d => format(`.${precisionFixed(d)}s`)(d);
</script>

<style>
  /*
    The wrapper div needs to have an explicit width and height in CSS.
    It can also be a flexbox child or CSS grid element.
    The point being it needs dimensions since the <LayerCake> element will
    expand to fill it.
  */
  .chart-container {
    width: 100%;
    height: 100%;
  }
</style>

<div class="chart-container">
  <LayerCake
    padding={{ top: 7, right: 10, bottom: 20, left: 25 }}
    x={xKey}
    y={yKey}
    z={zKey}
    yDomain={[0, null]}
    zScale={scaleOrdinal()}
    zDomain={seriesNames}
    zRange={seriesColors}
    flatData={flatten(datalong2)}
    data={datalong2}
  >
    <Svg>
      <AxisX
        gridlines={false}
        ticks={data.map(d => d[xKey]).sort((a, b) => a - b)}
        formatTick={formatTickX}
        snapTicks={true}
        tickMarks={true}
      />
      <AxisY
        ticks={4}
        formatTick={formatTickY}
      />
      <MultiLine
        {regHi}
      />
    </Svg>

    <Html>
      <Labels 
        {regHi}
      />
      <SharedTooltip
        formatTitle={formatTickX}
        dataset={data2}
      />
    </Html>
  </LayerCake>
</div>