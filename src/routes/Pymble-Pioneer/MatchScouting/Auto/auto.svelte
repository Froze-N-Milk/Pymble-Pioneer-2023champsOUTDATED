<script lang="ts">
	import { MatchDataArray, type MatchDataEntry } from '../../../../Utils/stores.js';
    import ScoringCollector from "../../../../Utils/ScoringCollector.svelte";
    import Selector from "../../../../Utils/Selector.svelte";
    import FoulCollector from '../../../../Utils/FoulCollector.svelte';

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
</style>

<div style="display: contents;">
	<h2 class="sectionHeader">AUTO</h2>

	<p class="sectionHeader">SCORING:</p>
	<ScoringCollector {data} />

	<p class="sectionHeader">PARKING:</p>
	<label for="">PARKING:</label>
	<Selector {options} bind:value={$MatchDataArray[$MatchDataArray.length - 1].autoParking} />

	<FoulCollector />

	<p class="sectionHeader">COMMENTS:</p>

	<textarea class="sectionHeader hoverSelfAnnounce" rows="8" bind:value={$MatchDataArray[$MatchDataArray.length - 1].autoComment}></textarea>
</div>