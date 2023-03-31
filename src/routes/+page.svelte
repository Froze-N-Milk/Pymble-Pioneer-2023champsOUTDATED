<script lang="ts">
	import { matchData } from './../Utils/stores.js';
    import { pageIndex } from "../Utils/stores";
    import Auto from "./Auto/auto.svelte";
    import Prematch from "./PreMatch/prematch.svelte";
    import Submission from "./Submission/submission.svelte";
    import Teleop from "./Teleop/teleop.svelte";
    import { fade } from 'svelte/transition';

	const pageOptions = [
		Prematch,
		Auto,
		Teleop,
		Submission
	];

	$:selectedPage = pageOptions[$pageIndex];

	function incrementPageIndex() {
		if($pageIndex < pageOptions.length - 1) {
			$pageIndex += 1;
		}
	}

	$:onLastPage = $pageIndex === pageOptions.length - 1;
	$:allowAdvance = $matchData[0] !== "" && $matchData[1] !== undefined && $matchData[1] !== "" && $matchData[2] !== undefined && $matchData[2] !== "";

	function decrementPageIndex() {
		if($pageIndex > 0) {
			$pageIndex -= 1;
		}
	}

	let formError: string;

	$: {
		if(!allowAdvance){
			formError = "FORM UNFILLED";
		}
		else {
			formError = "";
		}
	}

	$:onFirstPage = $pageIndex === 0;
</script>

<style>
	button {
		padding: none;
		height: calc(3rem + 2px);
		border: none;
		outline: 1px solid #20201D;
		background: #151513;
		color: snow;
		margin: none;
		aspect-ratio: 3/1;
	}

	button:hover {
		background: #D62246;
	}

	button:disabled {
		background: #20201D;
		color: rgba(255, 250, 250, 0);
	}
</style>

<form class="gridForm">
	<p class="sectionHeader">hiddenBuffer</p>
	<svelte:component this={selectedPage}/>
	<div class="sectionHeader"></div>
	<div class="sectionHeader"></div>
	<div class="sectionHeader"></div>
</form>

<div class="navbar">
	<button disabled={onFirstPage} on:click={decrementPageIndex} >PREV</button>
	<p class="padded">version b0.92</p>
	<button disabled={onLastPage || !allowAdvance} on:click={incrementPageIndex} >NEXT</button>
</div>