<script lang="ts">
    import ScoringCollector from "../../Utils/ScoringCollector.svelte";

	export let data = [0, 0, 0, 0, 0, 0];

	const required:boolean = false;
</script>

<div style="display: contents;">
	<h2 class="sectionHeader">TELEOP</h2>

	<ScoringCollector {data} />
</div>