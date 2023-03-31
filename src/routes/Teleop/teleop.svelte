<script lang="ts">
    import ScoringCollector from "../../Utils/ScoringCollector.svelte";
    import { matchData } from "../../Utils/stores";

	const data: number = 9;

	const required:boolean = false;
</script>

<style>
	textarea {
		resize: none;
		width: 35rem;
		margin-left: calc(50% - 18.5rem);
		background-color: #20201D;
		color: snow;
		border: none;
		outline: 1px solid #20201D;
	}
</style>

<div style="display: contents;">
	<h2 class="sectionHeader">TELEOP</h2>

	<ScoringCollector {data} />

	<p class="sectionHeader">COMMENTS:</p>

	<textarea class="sectionHeader" rows="8"></textarea>

	<div class="sectionHeader"></div>
	<div class="sectionHeader"></div>
</div>