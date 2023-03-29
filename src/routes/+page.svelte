<script lang="ts">
    import { afterUpdate, beforeUpdate, onMount } from 'svelte';
    import Auto from "./Auto/auto.svelte";
    import Prematch from "./PreMatch/prematch.svelte";
    import Teleop from "./Teleop/teleop.svelte";

	const pageOptions = [
		Prematch,
		Auto,
		Teleop,
	];

	export let pageIndex: number = 0;

	$:selectedPage = pageOptions[pageIndex];

	function incrementPageIndex() {
		if(pageIndex < pageOptions.length - 1) {
			pageIndex += 1;
		}
	}

	function decrementPageIndex() {
		if(pageIndex > 0) {
			pageIndex -= 1;
		}
	}
</script>


<svelte:component this={selectedPage} />


<div class="navbar">
	<button on:click={decrementPageIndex} >PREV</button>
	<p class="padded">version a0.7</p>
	<button on:click={incrementPageIndex} >NEXT</button>
</div>