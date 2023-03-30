<script lang="ts">
    import Auto from "./Auto/auto.svelte";
    import Prematch from "./PreMatch/prematch.svelte";
    import Teleop from "./Teleop/teleop.svelte";

	let prematchData: any[] = ["", 0, 0];
	let autoData = [0, 0, 0, 0, 0, 0];
	let teleopData = [0, 0, 0, 0, 0, 0];


	const pageOptions = [
		{page: Prematch, data: prematchData},
		{page: Auto, data: autoData},
		{page: Teleop, data: teleopData},
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

<svelte:component this={selectedPage.page} data={selectedPage.data}/>


<div class="navbar">
	<button on:click={decrementPageIndex} >PREV</button>
	<p class="padded">version a0.7</p>
	<button on:click={incrementPageIndex} >NEXT</button>
</div>