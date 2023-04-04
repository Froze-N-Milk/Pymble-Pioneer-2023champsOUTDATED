<script lang="ts">
	import { MatchDataArray, type MatchDataEntry } from './stores.js';
    import ScoreCounter from "./ScoreCounter.svelte";

    export let data: (keyof MatchDataEntry)[];
</script>

<label for="" class="left-column">HIGH CONES:</label>
<ScoreCounter bind:count={$MatchDataArray[$MatchDataArray.length - 1][data[0]]} />

<label for="" class="left-column">MIDDLE CONES:</label>
<ScoreCounter bind:count={$MatchDataArray[$MatchDataArray.length - 1][data[1]]} />

<label for="" class="left-column">LOW CONES:</label>
<ScoreCounter bind:count={$MatchDataArray[$MatchDataArray.length - 1][data[2]]} />

<div class="sectionHeader"></div>

<label for="" class="left-column">HIGH CUBES:</label>
<ScoreCounter bind:count={$MatchDataArray[$MatchDataArray.length - 1][data[3]]} />

<label for="" class="left-column">MIDDLE CUBES:</label>
<ScoreCounter bind:count={$MatchDataArray[$MatchDataArray.length - 1][data[4]]} />

<label for="" class="left-column">LOW CUBES:</label>
<ScoreCounter bind:count={$MatchDataArray[$MatchDataArray.length - 1][data[5]]} />