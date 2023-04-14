<script lang="ts">
	export let count: any;

	function increment() {
		count += 1;
	}

	function decrement() {
		if(count > 0){
			count -= 1;
		}
	}

	$:disabled = !(count > 0);

	export let borderColour: string = "#151513";
	export let backgroundColourHover: string = "#5386E4";
	export let hoverTextColour: string = "#fffafa";
</script>

<style>
	.wrapper {
		display: inline-flex;
		margin: 2px;
		border: none;
		overflow: hidden;
		max-width: calc(14rem + 6px);
		min-width: none;
		max-height: calc(3rem + 4px);
		outline: 2px solid var(--borderColour);
	}

	.contents {
		padding-top: 0rem;
		padding-bottom: 0;
		padding-left: 1rem;
		padding-right: 1rem;
		max-width: 8rem;
		min-width: calc(3rem + 2px);;
		border: none;
		outline: 1px solid #151513;
		background: #20201D;
		color: snow;
		text-align: center;
	}

	button {
		padding: none;
		height: calc(3rem + 2px);
		border: none;
		background: #20201D;
		outline: 1px solid #151513;
		color: snow;
		aspect-ratio: 1/1;
	}

	button:hover {
		background: var(--backgroundColourHover);
		cursor: pointer;
		color: var(--hoverTextColour);
	}

	button:disabled {
		color: #fffafa00;
		background: #20201D;
		cursor: default;
	}

</style>


<div class="wrapper" style:--borderColour={borderColour}>
	
	<button style:--hoverTextColour={hoverTextColour} style:--backgroundColourHover={backgroundColourHover} on:click|preventDefault={decrement} {disabled}>-</button>
	<input inputmode="numeric" readonly class="contents" bind:value={count} min=0/>
	<button style:--hoverTextColour={hoverTextColour} style:--backgroundColourHover={backgroundColourHover} on:click|preventDefault={increment} >+</button>
	
</div>