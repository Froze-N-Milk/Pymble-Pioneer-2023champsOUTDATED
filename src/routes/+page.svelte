<script lang="ts">
    import { pageIndex } from "../Utils/stores";
    import Auto from "./Auto/auto.svelte";
    import Prematch from "./PreMatch/prematch.svelte";
    import Submission from "./Submission/submission.svelte";
    import Teleop from "./Teleop/teleop.svelte";

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

	function decrementPageIndex() {
		if($pageIndex > 0) {
			$pageIndex -= 1;
		}
	}

	$:onFirstPage = $pageIndex === 0;
</script>


<form class="gridForm">
	<p class="sectionHeader">hiddenBuffer</p>
	<svelte:component this={selectedPage}/>
</form>

<div class="navbar">
	<button disabled={onFirstPage} on:click={decrementPageIndex} >PREV</button>
	<p class="padded">version a0.8</p>
	<button disabled={onLastPage} on:click={incrementPageIndex} >NEXT</button>
</div>