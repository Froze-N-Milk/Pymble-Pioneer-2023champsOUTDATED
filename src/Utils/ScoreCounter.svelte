<script lang="ts">
	export let count: number;

	function increment() {
		count += 1;
	}

	function decrement() {
		if(count > 0) {
			count -= 1;
		}
	}
	
</script>

<style>
	.wrapper {
		display: inline-flex;
		border: none;
		margin: none;
	}

	.contents {
		padding-top: 1rem;
		padding-bottom: 0;
		padding-left: 1rem;
		padding-right: 1rem;
		width: 6rem;
		border: 0px;
  		outline: 1px solid #151513;
		background: #20201D;
		color: snow;
		padding: 1rem;
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
</style>

<div class="wrapper">
	<button on:click={decrement} >-</button>
	<input inputmode="numeric" readonly class="contents" bind:value={count} min=0/>
	<button on:click={increment} >+</button>
</div>