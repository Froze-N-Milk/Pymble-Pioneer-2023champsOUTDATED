<script lang="ts">
	import { MatchDataArray, type MatchDataEntry } from './stores.js';
    import ScoreCounter from "./ScoreCounter.svelte";

    export let data: (keyof MatchDataEntry)[];
</script>

<label for="">HIGH CONES:</label>
<ScoreCounter bind:count={$MatchDataArray[$MatchDataArray.length - 1][data[0]]} />

<label for="">MIDDLE CONES:</label>
<ScoreCounter bind:count={$MatchDataArray[$MatchDataArray.length - 1][data[1]]} />

<label for="">LOW CONES:</label>
<ScoreCounter bind:count={$MatchDataArray[$MatchDataArray.length - 1][data[2]]} />

<div class="sectionHeader"></div>

<label for="">HIGH CUBES:</label>
<ScoreCounter bind:count={$MatchDataArray[$MatchDataArray.length - 1][data[3]]} />

<label for="">MIDDLE CUBES:</label>
<ScoreCounter bind:count={$MatchDataArray[$MatchDataArray.length - 1][data[4]]} />

<label for="">LOW CUBES:</label>
<ScoreCounter bind:count={$MatchDataArray[$MatchDataArray.length - 1][data[5]]} />