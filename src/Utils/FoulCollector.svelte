<script lang="ts">
	import { matchData } from './stores.js';
    import ScoreCounter from "./ScoreCounter.svelte";
</script>

<p class="sectionHeader">FOULS:</p>

<label for="">FOULS:</label>
<ScoreCounter bind:count={$matchData[27]} />

<label for="">TECH FOULS:</label>
<ScoreCounter bind:count={$matchData[28]} />