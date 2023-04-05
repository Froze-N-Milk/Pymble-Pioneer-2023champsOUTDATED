<script lang="ts">
	import ScoreCounter from "./ScoreCounter.svelte";
    import type { MatchDataEntry } from "./stores";

    export let data: (keyof MatchDataEntry)[];

    export let SelectedMatchDataEntry: MatchDataEntry;
</script>

<label for="" class="left-column">DOUBLE SUBSTATION CONES:</label>
<ScoreCounter bind:count={SelectedMatchDataEntry[data[0]]} />

<label for="" class="left-column">DOUBLE SUBSTATION CUBES:</label>
<ScoreCounter bind:count={SelectedMatchDataEntry[data[1]]} />

<div class="sectionHeader"></div>

<label for="" class="left-column">SINGLE SUBSTATION CONES:</label>
<ScoreCounter bind:count={SelectedMatchDataEntry[data[2]]} />

<label for="" class="left-column">SINGLE SUBSTATION CUBES:</label>
<ScoreCounter bind:count={SelectedMatchDataEntry[data[3]]} />

<div class="sectionHeader"></div>

<label for="" class="left-column">FLOOR CONES:</label>
<ScoreCounter bind:count={SelectedMatchDataEntry[data[4]]} />

<label for="" class="left-column">FLOOR CUBES:</label>
<ScoreCounter bind:count={SelectedMatchDataEntry[data[5]]} />