<script lang="ts">
	import { matchData } from './stores.js';
    import ScoreCounter from "./ScoreCounter.svelte";

    export let data: number;
</script>

<label for="">DOUBLE SUBSTATION CONES:</label>
<ScoreCounter bind:count={$matchData[data]} />

<label for="">SINGLE SUBSTATION CONES:</label>
<ScoreCounter bind:count={$matchData[data+1]} />

<label for="">FLOOR CONES:</label>
<ScoreCounter bind:count={$matchData[data+2]} />

<div class="sectionHeader"></div>

<label for="">DOUBLE SUBSTATION CUBES:</label>
<ScoreCounter bind:count={$matchData[data+3]} />

<label for="">SINGLE SUBSTATION CUBES:</label>
<ScoreCounter bind:count={$matchData[data+4]} />

<label for="">FLOOR CUBES:</label>
<ScoreCounter bind:count={$matchData[data+5]} />