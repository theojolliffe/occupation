<script>

	export let options;
	export let selected;

</script>

<div id="select">
	<select bind:value={selected} on:change="{() => window.location.href = selected.split(" ")[0].replace(",", "")}">
		<option value="" disabled selected>Select an occupation</option>
		{#each options as option}
			<option value={option}>
				{option}
			</option>
		{/each}
	</select>
</div>


<style>
	#select {
		text-align: left;
	}
	a {
		text-decoration: none;
		display: block;
		padding: 0;
		border: 2px solid #206095 !important;
	}
	a span {
		display: inline-block;
		padding: 10px 5px;
	}
	.selection {
		overflow: hidden;
		max-width: calc(100% - 50px);
    white-space: nowrap;
	}
	#dropdown ul {
		list-style: none;
		background: #eee;
		margin: 0;
		margin-top: 3px;
		padding: 0;
		max-height: 170px;
		overflow-y: auto;
		overflow-x: hidden;
	}
	#dropdown li {
		line-height: 1em;
		padding: 6px;
	}
	#dropdown .highlight {
		color: #fff;
		background-color: #206095;
		font-weight: 500;
		cursor: pointer;
	}
	/* normalize the input elements, make them look like everything else */
	#select input {
		width: calc(100% - 40px);
		box-sizing: border-box;
		background: transparent;
		font-family: inherit;
		font-size: inherit;
		color: inherit;
		font-weight: inherit;
		line-height: inherit;
		display: inline-block;
		padding: 10px 5px;
		margin: 0;
		background-color: #fff;
		border: 2px solid #206095 !important;
		border-radius: 0px;
		-webkit-appearance: none;
		-moz-appearance: none;
	}
	#select input:focus {
		outline: none;
	}
	/* custom field (drop-down, text element) styling  */
	#select {
		display: block;
		width: 100%;
		position: relative;
	}
	.active {
		z-index: 1000;
		outline: 3px solid orange;
	}
	/* the toggle is the visible part in the form */
	#toggle,
	#select input {
		line-height: inherit;
		color: #206095;
		font-weight: 500;
		cursor: pointer;
	}
	/* drop-down list / text element */
	#dropdown {
		width: 100%;
		position: absolute;
		left: 0;
		opacity: 1;
	}
	.selected {
		color: #fff !important;
		background-color: #206095;
	}
	.button {
		color: #fff;
		background-color: #206095;
		background-repeat: no-repeat;
		background-position: center;
		display: inline-block;
		float: right;
	}
	.down {
		background-image: url("https://bothness.github.io/geo-draw/img/chevron-down.svg");
		width: 30px;
	}
	.search {
		background-image: url("https://bothness.github.io/geo-draw/img/search.svg");
		width: 30px;
	}
	.close {
		background-image: url("https://bothness.github.io/geo-draw/img/x-close.svg");
		width: 30px;
	}
	small {
		margin-left: 3px;
	}
	#toggle small {
		color: lightgrey;
	}
	#dropdown small {
		color: grey;
	}
</style>