<script lang="ts">
	import { MatchDataArray, ScoutingPage } from '../Utils/stores.js';
    import { pageIndex } from "../Utils/stores";
    import Auto from "./Auto/auto.svelte";
    import Prematch from "./PreMatch/prematch.svelte";
    import Submission from "./Submission/submission.svelte";
    import Teleop from "./Teleop/teleop.svelte";
    import Selector from '../Utils/Selector.svelte';

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
	$:allowAdvance = $MatchDataArray[$MatchDataArray.length - 1].scouterName !== "" && $MatchDataArray[$MatchDataArray.length - 1].teamNumber !== "" && $MatchDataArray[$MatchDataArray.length - 1].teamNumber !== "" && $MatchDataArray[$MatchDataArray.length - 1].matchNumber !== 0 && $MatchDataArray[$MatchDataArray.length - 1].matchNumber !== "" && $MatchDataArray[$MatchDataArray.length - 1].startingPosition !== 0;
	$:console.log($MatchDataArray);

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
		height: calc(3rem);
		border: none;
		outline: 1px solid #20201D;
		background: #151513;
		color: snow;
		margin: none;
		width: 5rem;
	}

	button:hover {
		background: #D62246;
		cursor: pointer;
	}

	button:disabled {
		background: #20201D;
		color: rgba(255, 250, 250, 0);
		cursor: default;
	}

	.buttonLookAlike {
		/* outline: 1px solid #151513; */
		background: #151513;
		/* background: #20201D; */
		color: snow;
		margin: none;
		text-align: left;
		padding-left: 2rem;
		padding-right: 2rem;
		overflow: hidden;
		border: none;
		height: calc(3rem);
		width: 5rem;
	}
</style>

<form>
	<svelte:component this={selectedPage}/>
</form>

<div class="navbar">
	<button disabled={onFirstPage} on:click={decrementPageIndex} >PREV</button>
	<div style="width: 1rem;" />
	<select class="buttonLookAlike hoverSelfAnnounce" >
		{#each $MatchDataArray.map(a => a.matchNumber) as option}
			<option value={option}>
				{option}
			</option>
		{/each}
	</select>
	<div style="width: 1rem;" />

	<button disabled={onLastPage || !allowAdvance} on:click={incrementPageIndex} >NEXT</button>
</div>