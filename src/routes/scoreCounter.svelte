<script lang="ts">
	export let count: number;

	function increment() {
		alert(count);
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

	button {
		padding: none;
		height: 3rem;
		border: none;
		outline: 1px solid #151513;
		background: #20201D;
		color: snow;
		margin: none;
		aspect-ratio: 1/1;
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
</style>

<div class="wrapper">
	<button on:click={decrement} >-</button>
	<input inputmode="numeric" readonly class="contents" value={count} min=0/>
	<button on:click={increment} >+</button>
</div>