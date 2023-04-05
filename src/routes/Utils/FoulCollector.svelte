<script lang="ts">
    import ScoreCounter from "./ScoreCounter.svelte";
    import type { MatchDataEntry } from "./stores";

	export let SelectedMatchDataEntry: MatchDataEntry;
</script>

<p class="sectionHeader">FOULS:</p>

<label for="" class="left-column">FOULS:</label>
<ScoreCounter bind:count={SelectedMatchDataEntry.fouls} />

<label for="" class="left-column">TECH FOULS:</label>
<ScoreCounter bind:count={SelectedMatchDataEntry.techFouls} />