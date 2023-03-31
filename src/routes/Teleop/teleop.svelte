<script lang="ts">
    import FoulCollector from "../../Utils/FoulCollector.svelte";
    import PickupCollector from "../../Utils/PickupCollector.svelte";
	import ScoringCollector from "../../Utils/ScoringCollector.svelte";
    import Selector from "../../Utils/Selector.svelte";

	const scoringRangeStart: number = 9;

	const pickupRangeStart: number = 9;

	const options = ["DOCKED", "ENGAGED", "PARKED"];

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
	<h2 class="sectionHeader">TELEOP</h2>

	<p class="sectionHeader">SCORING:</p>

	<ScoringCollector data={scoringRangeStart} />

	<p class="sectionHeader">COLLECTING:</p>

	<PickupCollector data={pickupRangeStart} />

	<FoulCollector />

	<p class="sectionHeader">PARKING:</p>
	<label for="">PARKING:</label>
	<Selector {options} />

	<p class="sectionHeader">COMMENTS:</p>

	<textarea class="sectionHeader hoverSelfAnnounce" rows="8"></textarea>
</div>