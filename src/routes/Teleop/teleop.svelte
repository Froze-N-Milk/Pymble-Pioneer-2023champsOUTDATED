<script lang="ts">
    import ScoringCollector from "../../Utils/ScoringCollector.svelte";
    import { matchData } from "../../Utils/stores";

	const data: number = 9;

	const required:boolean = false;
</script>

<div style="display: contents;">
	<h2 class="sectionHeader">TELEOP</h2>

	<ScoringCollector {data} />
</div>