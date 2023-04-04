<script lang="ts">
	import { MatchDataArray, type MatchDataEntry } from '../../../Utils/stores.js';
    import FoulCollector from "../../../Utils/FoulCollector.svelte";
    import PickupCollector from "../../../Utils/PickupCollector.svelte";
	import ScoringCollector from "../../../Utils/ScoringCollector.svelte";
    import Selector from "../../../Utils/Selector.svelte";

	const scoringRangeStart: (keyof MatchDataEntry)[] = [
		"teleopTopCones",
		"teleopMiddleCones",
		"teleopLowCones",
		"teleopTopCubes",
		"teleopMiddleCubes",
		"teleopLowCubes"
	];

	const pickupRangeStart: (keyof MatchDataEntry)[] = [
		"teleopDoubleCones",
		"teleopDoubleCubes",
		"teleopSingleCones",
		"teleopSingleCubes",
		"teleopFloorCones",
		"teleopFloorCubes"
	];

	const options = ["", "DOCKED", "ENGAGED", "PARKED"];

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
	<h2 class="sectionHeader">TELEOP</h2>

	<p class="sectionHeader">SCORING:</p>

	<ScoringCollector data={scoringRangeStart} />

	<p class="sectionHeader">COLLECTING:</p>

	<PickupCollector data={pickupRangeStart} />

	<FoulCollector />

	<p class="sectionHeader">PARKING:</p>
	<label for="">ATTEMPED TO ENAGAGE:</label>
	<button class="hoverSelfAnnounce" style:--background={$MatchDataArray[$MatchDataArray.length - 1].teleopEngageAttempt ? "#D62246" : "#20201D"} on:click|preventDefault={() => $MatchDataArray[$MatchDataArray.length - 1].teleopEngageAttempt = !$MatchDataArray[$MatchDataArray.length - 1].teleopEngageAttempt}></button>

	<label for="">PARKING:</label>
	<Selector {options} bind:value={$MatchDataArray[$MatchDataArray.length - 1].teleopParking}/>

	<p class="sectionHeader">COMMENTS:</p>

	<textarea class="sectionHeader hoverSelfAnnounce" rows="8" bind:value={$MatchDataArray[$MatchDataArray.length - 1].teleopComment}></textarea>
</div>