<script lang="ts">
	import { matchData } from './../Utils/stores.js';
    import { pageIndex } from "../Utils/stores";
    import Auto from "./Auto/auto.svelte";
    import Prematch from "./PreMatch/prematch.svelte";
    import Submission from "./Submission/submission.svelte";
    import Teleop from "./Teleop/teleop.svelte";
    import { fade } from 'svelte/transition';

	// let prematchData: any[] = ["", , ];
	// let autoData: any[] = [0, 0, 0, 0, 0, 0];
	// let teleopData: any[] = [0, 0, 0, 0, 0, 0];
	// $:submissionData = prematchData.concat(autoData).concat(teleopData);
	// $: console.log(submissionData);

	// const pageOptions = [
	// 	{page: Prematch, data: prematchData},
	// 	{page: Auto, data: autoData},
	// 	{page: Teleop, data: teleopData},
	// 	{page: Submission, data: submissionData}
	// ];

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
		console.log($matchData[1]);
		console.log($matchData[2]);

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
	.error {
		color: red;
	}
</style>

<form class="gridForm">
	<p class="sectionHeader">hiddenBuffer</p>
	<svelte:component this={selectedPage}/>

	{#if !allowAdvance}
		<p class="sectionHeader error" transition:fade>{formError}</p>
	{/if}

	<div class="sectionHeader"></div>
</form>

<div class="navbar">
	<button disabled={onFirstPage} on:click={decrementPageIndex} >PREV</button>
	<p class="padded">version b0.90</p>
	<button disabled={onLastPage || !allowAdvance} on:click={incrementPageIndex} >NEXT</button>
</div>