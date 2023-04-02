<script lang="ts">
	import { MatchDataArray } from './stores.js';
    import ScoreCounter from "./ScoreCounter.svelte";
</script>

<p class="sectionHeader">FOULS:</p>

<label for="">FOULS:</label>
<ScoreCounter bind:count={$MatchDataArray[$MatchDataArray.length - 1].fouls} />

<label for="">TECH FOULS:</label>
<ScoreCounter bind:count={$MatchDataArray[$MatchDataArray.length - 1].techFouls} />