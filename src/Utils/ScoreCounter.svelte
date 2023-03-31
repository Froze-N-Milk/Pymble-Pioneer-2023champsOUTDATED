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
		overflow: visible;
	}

	.contents {
		padding-top: 0rem;
		padding-bottom: 0;
		padding-left: 1rem;
		padding-right: 1rem;
		width: 6rem;
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
		background: #D62246;
	}

	button:disabled {
		color: rgba(255, 250, 250, 0);
	}

	button:disabled:hover {
		background: #20201D;

	}
</style>


<div class="wrapper">
	<button on:click|preventDefault={decrement} {disabled}>-</button>
	<input inputmode="numeric" readonly class="contents" bind:value={count} min=0/>
	<button on:click|preventDefault={increment} >+</button>
</div>