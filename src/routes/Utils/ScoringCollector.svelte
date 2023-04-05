<script lang="ts">
	import ScoreCounter from "./ScoreCounter.svelte";
    import type { MatchDataEntry } from "./stores";

    export let data: (keyof MatchDataEntry)[];
    export let SelectedMatchDataEntry: MatchDataEntry;
</script>

<label for="" class="left-column">HIGH CONES:</label>
<ScoreCounter bind:count={SelectedMatchDataEntry[data[0]]} />

<label for="" class="left-column">MIDDLE CONES:</label>
<ScoreCounter bind:count={SelectedMatchDataEntry[data[1]]} />

<label for="" class="left-column">LOW CONES:</label>
<ScoreCounter bind:count={SelectedMatchDataEntry[data[2]]} />

<div class="sectionHeader"></div>

<label for="" class="left-column">HIGH CUBES:</label>
<ScoreCounter bind:count={SelectedMatchDataEntry[data[3]]} />

<label for="" class="left-column">MIDDLE CUBES:</label>
<ScoreCounter bind:count={SelectedMatchDataEntry[data[4]]} />

<label for="" class="left-column">LOW CUBES:</label>
<ScoreCounter bind:count={SelectedMatchDataEntry[data[5]]} />