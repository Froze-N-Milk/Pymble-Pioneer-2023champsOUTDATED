<script lang="ts">
	import FoulCollector from "../../Utils/FoulCollector.svelte";
    import PickupCollector from "../../Utils/PickupCollector.svelte";
	import ScoringCollector from "../../Utils/ScoringCollector.svelte";
    import Selector from '../../Utils/Selector.svelte';
    import type { MatchDataEntry } from "../../Utils/stores";
	import { SelectedMatchDataEntry } from "../../Utils/stores";


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
	<label for="" class="left-column">ATTEMPED TO ENAGAGE:</label>
	<button class="hoverSelfAnnounce" style:--background={$SelectedMatchDataEntry.teleopEngageAttempt ? "#D62246" : "#20201D"} on:click|preventDefault={() => $SelectedMatchDataEntry.teleopEngageAttempt = !$SelectedMatchDataEntry.teleopEngageAttempt}></button>

	<label for="" class="left-column">PARKING:</label>
	<Selector {options} bind:value={$SelectedMatchDataEntry.teleopParking}/>

	<p class="sectionHeader">COMMENTS:</p>

	<textarea class="sectionHeader hoverSelfAnnounce" rows="8" bind:value={$SelectedMatchDataEntry.teleopComment}></textarea>
</div>