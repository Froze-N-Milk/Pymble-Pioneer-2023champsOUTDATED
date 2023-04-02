<script lang="ts">
	import { MatchDataArray, type MatchDataEntry } from './stores.js';
    import ScoreCounter from "./ScoreCounter.svelte";

    export let data: (keyof MatchDataEntry)[];
</script>

<label for="">DOUBLE SUBSTATION CONES:</label>
<ScoreCounter bind:count={$MatchDataArray[$MatchDataArray.length - 1][data[0]]} />

<label for="">DOUBLE SUBSTATION CUBES:</label>
<ScoreCounter bind:count={$MatchDataArray[$MatchDataArray.length - 1][data[1]]} />

<div class="sectionHeader"></div>

<label for="">SINGLE SUBSTATION CONES:</label>
<ScoreCounter bind:count={$MatchDataArray[$MatchDataArray.length - 1][data[2]]} />

<label for="">SINGLE SUBSTATION CUBES:</label>
<ScoreCounter bind:count={$MatchDataArray[$MatchDataArray.length - 1][data[3]]} />

<div class="sectionHeader"></div>

<label for="">FLOOR CONES:</label>
<ScoreCounter bind:count={$MatchDataArray[$MatchDataArray.length - 1][data[4]]} />

<label for="">FLOOR CUBES:</label>
<ScoreCounter bind:count={$MatchDataArray[$MatchDataArray.length - 1][data[5]]} />