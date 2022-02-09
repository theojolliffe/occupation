<script>
	// Components for working with Mapbox layers
	import { getData, getColor, getTopo } from "./js/utils.js";
	import Map from './Map.svelte';
	import MapSource from './MapSource.svelte';
	import MapLayer from './MapLayer.svelte';
	import MapTooltip from './MapTooltip.svelte';
	
	const colors = {
		seq5: ['rgb(234, 236, 177)', 'rgb(169, 216, 145)', 'rgb(0, 167, 186)', 'rgb(0, 78, 166)', 'rgb(0, 13, 84)'],
		div10: ['#67001f','#b2182b','#d6604d','#f4a582','#fddbc7','#d1e5f0','#92c5de','#4393c3','#2166ac','#053061']	
	};

  const pconData = "/src/charts/components/svelte-maps-main/dist/data/salary-pcon10.csv";
  const pconBounds = {
	  url: "/src/charts/components/svelte-maps-main/dist/data/pcon10-bounds.json",
	  layer: "PCONreg",
	  code: "AREACD"
	};
	
	const lsoaData = "/src/charts/components/svelte-maps-main/dist/data/imd-lsoa11.csv";
	const lsoaBounds = {
		url: "https://cdn.ons.gov.uk/maptiles/administrative/lsoa/v1/boundaries/{z}/{x}/{y}.pbf",
		layer: "boundaries",
		code: "AREACD"
	};

	const bounds = {
		uk: [[ -9, 49 ], [ 2, 61 ]],
		ew: [[-6, 49], [2, 56]]
	};
	
	// Bindings
	let map1, map2, map3, map4;

	// Data
	let data = {};
	let geojson;

	// State
	let zoom;
	let center = {};
	let hovered, selected;

	// // Get geometry for geojson maps
	// getTopo(pconBounds.url, pconBounds.layer)
	// .then(res => geojson = res);
	
	// // Get data for geojson maps
	// getData(pconData)
	// .then(res => {
	// 	let vals = res.map(d => d.salary).sort((a, b) => a - b);
	// 	let len = vals.length;
	// 	let breaks = [
	// 		vals[0],
	// 		vals[Math.floor(len * 0.2)],
	// 		vals[Math.floor(len * 0.4)],
	// 		vals[Math.floor(len * 0.6)],
	// 		vals[Math.floor(len * 0.8)],
	// 		vals[len - 1]
	// 	];
	// 	res.forEach(d => {
	// 		d.color = getColor(d.salary, breaks, colors.seq5);
	// 	});
	// 	data.pcon = res;
	// });

	// // Get data for vector tiles map
	// getData(lsoaData)
	// .then(res => {
	// 	res.forEach(d => {
	// 		d.color = colors.div10[+d.income_decile - 1];
	// 		d.AREACD = d.lsoa11cd;
	// 	});
	// 	data.lsoa = res;
	// });
</script>

<div>
	<div class="map">
		{#if geojson && data.pcon}
			<!-- <Map id="map3"  location={{bounds: bounds.uk}} bind:map={map3} controls={true}> -->
				<!-- <MapSource
					id="pcon"
					type="geojson"
					data={geojson}
					promoteId={pconBounds.code}
					maxzoom={13}
				> -->
					<!-- <MapLayer
						id="pcon-fill"
						data={data.pcon}
						type="fill"
						hover={true}
						bind:hovered
						select={true}
						bind:selected
						paint={{
							'fill-color': ['case',
								['!=', ['feature-state', 'color'], null], ['feature-state', 'color'],
								'rgba(255, 255, 255, 0)'
							],
							'fill-opacity': 0.7
						}}
					>
						<MapTooltip content={`Code: ${hovered}`}/>
					</MapLayer> -->
					<!-- <MapLayer
						id="pcon-line"
						type="line"
						paint={{
							'line-color': ['case',
								['==', ['feature-state', 'selected'], true], 'black',
								['==', ['feature-state', 'hovered'], true], 'orange',
								'rgba(255, 255, 255, 0)'
							],
							'line-width': ['case',
								['==', ['feature-state', 'selected'], true], 2,
								1
							]
						}}
					/> -->
				<!-- </MapSource> -->
			<!-- </Map> -->
		{/if}
	</div>
</div>

<style>
	section {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
	  background-position: center;
	  background-repeat: no-repeat;
	  background-size: cover;
	  margin: 0;
		margin-bottom: 20px;
	  padding: 0;
	}
	button {
		padding: 0 2px;
		cursor: pointer;
	}
	.wrapper {
		width: 100%;
		max-width: 768px;
		margin: 0 16;
	}
	.grid {
		display: grid;
		width: 100%;
		max-width: 768px;
		margin: 0 16;
		grid-gap: 30px;
		grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
		justify-content: stretch;
	}
	.map {
		height: 300px;
	}
	a:hover {
		cursor: pointer;
	}
	h2 {
		font-size: 1.2em;
		font-weight: bold;
	}
</style>
