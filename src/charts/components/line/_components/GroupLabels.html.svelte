<!--
  @component
  Generates HTML text labels for a nested data structure. It places the label near the y-value of the highest x-valued data point. This is useful for labeling the final point in a multi-series line chart, for example. It expects your data to be an array of objects where each has `values` field that is an array of data objects. It uses the `z` field accessor to pull the text label.
 -->
<script>
  import { getContext } from 'svelte';
  import { max } from 'd3-array';
import { group_outros } from 'svelte/internal';
  export let regHi;
  console.log('reghii', regHi)

  const { data, x, y, xScale, yScale, xRange, yRange, z } = getContext('LayerCake');

  /* --------------------------------------------
   * Title case the first letter
   */
  const cap = val => val.replace(/^\w/, d => d.toUpperCase());

  /* --------------------------------------------
   * Put the label on the highest value
   */
  $: left = values => $xScale(max(values, $x)) /  Math.max(...$xRange);
  $: top = values => $yScale(max(values, $y)) / Math.max(...$yRange);


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

{#each $data as group}
  {#if group.region == regHi}
    <div
      class="label"
      style="
        top:{top(group.values) * 100}%;
        left:{left(group.values) * 100}%;
      "
    >{reg_lu[regHi]}</div>
  {/if}
{/each}

<style>
  .label {
    position: absolute;
    transform: translate(-100%, -100%)translateY(1px);
    font-size: 13px;
  }
</style>