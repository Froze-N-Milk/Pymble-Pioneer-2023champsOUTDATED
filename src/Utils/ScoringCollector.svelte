<script lang="ts">
	import { matchData } from './stores.js';
    import ScoreCounter from "./ScoreCounter.svelte";

    export let data: number;
</script>

<p class="sectionHeader">CONES:</p>

<label for="">HIGH CONES:</label>
<ScoreCounter bind:count={$matchData[data]} />

<label for="">MIDDLE CONES:</label>
<ScoreCounter bind:count={$matchData[data+1]} />

<label for="">LOW CONES:</label>
<ScoreCounter bind:count={$matchData[data+2]} />

<p class="sectionHeader">CUBES:</p>

<label for="">HIGH CUBES:</label>
<ScoreCounter bind:count={$matchData[data+3]} />

<label for="">MIDDLE CUBES:</label>
<ScoreCounter bind:count={$matchData[data+4]} />

<label for="">LOW CUBES:</label>
<ScoreCounter bind:count={$matchData[data+5]} />