<script lang="ts">
	import ScoringCollector from "../../Utils/ScoringCollector.svelte";
    import Selector from "../../Utils/Selector.svelte";
    import FoulCollector from '../../Utils/FoulCollector.svelte';
    import type { MatchDataEntry } from "../../Utils/stores";
	import { SelectedMatchDataEntry } from "../../Utils/stores";

	const data: (keyof MatchDataEntry)[] = [
		"autoTopCones",
		"autoMiddleCones",
		"autoLowCones",
		"autoTopCubes",
		"autoMiddleCubes",
		"autoLowCubes"
	];

	const options = ["", "DOCKED", "ENGAGED", "MOBILITY"];
</script>

<style>
	textarea {
		resize: none;
		width: 80%;
		max-width: 35rem;
		margin: auto;
		background-color: #20201D;
		color: snow;
		border: none;
		outline: 1px solid #20201D;
	}

	.hoverSelfAnnounce:hover {
		outline: 2px solid #D62246;
		cursor: pointer;
	}

	button {
		padding: none;
		height: calc(3rem);
		width: 14rem;
		border: none;
		background: var(--background);
		color: snow;
		margin: none;
		outline: 1px solid #151513;
	}
</style>

<div style="display: contents;">
	<h2 class="sectionHeader">AUTO</h2>

	<p class="sectionHeader">SCORING:</p>
	<ScoringCollector {data} />

	<p class="sectionHeader" >PARKING:</p>
	<label for="" class="left-column">ATTEMPED TO ENAGAGE:</label>
	<button class="hoverSelfAnnounce" style:--background={$SelectedMatchDataEntry.autoEngageAttempt ? "#D62246" : "#20201D"} on:click|preventDefault={() => $SelectedMatchDataEntry.autoEngageAttempt = !$SelectedMatchDataEntry.autoEngageAttempt}></button>

	<label for="" class="left-column">PARKING:</label>
	<Selector {options} bind:value={$SelectedMatchDataEntry.autoParking} />

	<FoulCollector />

	<p class="sectionHeader">COMMENTS:</p>

	<textarea class="sectionHeader hoverSelfAnnounce" rows="8" bind:value={$SelectedMatchDataEntry.autoComment}></textarea>
</div>