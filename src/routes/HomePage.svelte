<style>
	button {
		padding: none;
		height: calc(3rem + 2px);
		max-width: 14rem;
		min-width: 5rem;
		border: none;
		background: var(--background);
		color: snow;
		margin: none;
		outline: 1px solid #151513;
	}
</style>

<script lang="ts">
    import { downloadToggle, fileType, ScoutingPage } from "./Utils/stores";
    import MatchScouting from "./MatchScouting/MatchScouting.svelte";
    import PitScouting from "./PitScouting/PitScouting.svelte";

    let settingsToggle: boolean = false;
</script>

<form>
	<label for="" class="left-column">PIT SCOUTING:</label>
	<button class="hoverSelfAnnounce" style:--background="#20201D" on:click={() => $ScoutingPage = PitScouting}></button>

	<label for="" class="left-column">MATCH SCOUTING:</label>
	<button class="hoverSelfAnnounce" style:--background="#20201D" on:click={() => $ScoutingPage = MatchScouting}></button>

	<p class="sectionHeader">SETTINGS</p>
		
	<label for="" class="left-column">{settingsToggle ? "HIDE" : "SHOW"} SETTINGS:</label>
	<button class="hoverSelfAnnounce" style:--background={settingsToggle ? "#D62246" : "#20201D"} on:click|preventDefault={() => {settingsToggle = !settingsToggle;}}></button>


	{#if settingsToggle}
	<label for="" class="left-column">DOWNLOAD AUTOMATICALLY:</label>
	<button class="hoverSelfAnnounce" style:--background={$downloadToggle ? "#D62246" : "#20201D"} on:click|preventDefault={() => {$downloadToggle = !$downloadToggle;}}></button>
	<label for="" class="left-column">{$fileType ? "CSV" : "JSON"}</label>
	<!-- $fileType = !$fileType; for the next one -->
	<button class="hoverSelfAnnounce" style:--background={$fileType ? "#20201D" : "#D62246"} on:click|preventDefault={() => {}}></button> 
	{/if}
</form>

<div class="navbar">
	<p class="padded">version 1.2</p>
</div>