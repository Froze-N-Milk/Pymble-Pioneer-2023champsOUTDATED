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
	
</script>

<style>
	.wrapper {
		display: inline-flex;
		border: none;
		margin: none;
		overflow: hidden;
		max-width: 14rem;
		min-width: none;
		max-height: calc(3rem + 2px);
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
		outline: 1px solid #151513;
		background: #20201D;
		color: snow;
		margin: none;
		aspect-ratio: 1/1;
	}

	button:hover {
		background: #5386E4;
		cursor: pointer;
	}

	button:disabled {
		color: rgba(255, 250, 250, 0);
		background: #20201D;
		cursor: default;
	}

</style>


<div class="wrapper">
	<button on:click|preventDefault={decrement} {disabled}>-</button>
	<input inputmode="numeric" readonly class="contents" bind:value={count} min=0/>
	<button on:click|preventDefault={increment} >+</button>
</div>