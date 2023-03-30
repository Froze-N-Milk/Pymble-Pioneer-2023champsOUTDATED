<script lang="ts">
    import ScoringCollector from "../../Utils/ScoringCollector.svelte";
    import { matchData } from "../../Utils/stores";

	const data: number = 3;
	const required:boolean = false;
</script>

<div style="display: contents;">
	<h2 class="sectionHeader">AUTO</h2>

	<ScoringCollector {data} />
</div>