<script lang="ts">
    import ScoringCollector from "../../Utils/ScoringCollector.svelte";
    import Selector from "../../Utils/Selector.svelte";

	const data: number = 3;

	const options = ["DOCKED", "ENGAGED", "MOBILITY"];
</script>

<style>
	textarea {
		resize: none;
		width: 80%;
		max-width: 35rem;
		margin: auto;
		background-color: #20201D;
		color: black;
		border: none;
		outline: 1px solid #20201D;
	}
</style>

<div style="display: contents;">
	<h2 class="sectionHeader">AUTO</h2>

	<p class="sectionHeader">PARKING:</p>
	<label for="">PARKING:</label>
	<Selector {options} />

	<p class="sectionHeader">SCORING:</p>
	<ScoringCollector {data} />

	<p class="sectionHeader">COMMENTS:</p>

	<textarea class="sectionHeader hoverSelfAnnounce" rows="8"></textarea>
</div>