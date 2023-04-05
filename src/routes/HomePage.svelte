<style>
	button {
		padding: none;
		height: calc(3rem + 2px);
		max-width: 14rem;
		min-width: calc(7rem - 1px);
		border: none;
		background: var(--background);
		color: snow;
		margin: none;
	}

	/* input[type = "file"] {
		border: 0;
		clip: rect(0, 0, 0, 0);
		height: 1px;
		overflow: hidden;
		padding: 0;
		position: absolute !important;
		white-space: nowrap;
		width: 1px;
	}
	.uploader {
		padding-top: calc(1.25rem);
		height: calc(1.75rem + 2px);
		width: calc(7rem - 1px);
		border: none;
		background: #20201D;
		color: snow;
		margin: none;
		text-align: center;
	} */

	.line-wrapper {
		display: inline-flex;
		max-width: 14rem;
	}
</style>

<script lang="ts">
    import { downloadToggle, fileType, MatchDataArray, ScoutingPage } from "./Utils/stores";
    import MatchScouting from "./MatchScouting/MatchScouting.svelte";
    import PitScouting from "./PitScouting/PitScouting.svelte";

    let settingsToggle: boolean = false;

	let matchDataFile: any;
	let pitScoutingFile: any;
</script>

<form>
	<label for="" class="left-column">PIT SCOUTING:</label>
	<div class="line-wrapper">
		<button class="hoverSelfAnnounce" style:--background="#20201D" on:click={() => $ScoutingPage = PitScouting}></button>
		
		<div style="width: 2px;"/>
		<input type="file" name="pit-uploader" id="pit-uploader" >
		<label for="pit-uploader" class="uploader hoverSelfAnnounce"> ^ </label>
	</div>

	<label for="" class="left-column">MATCH SCOUTING:</label>
	<div class="line-wrapper">
		<button class="hoverSelfAnnounce" style:--background="#20201D" on:click={() => $ScoutingPage = MatchScouting}></button>
		
		<div style="width: 2px;"/>
		<input type="file" name="match-uploader" id="match-uploader" bind:files={matchDataFile}>
		<label for="match-uploader" class="uploader hoverSelfAnnounce"> ^ </label>
	</div>

	<p class="sectionHeader">SETTINGS</p>
		
	<label for="" class="left-column">{settingsToggle ? "HIDE" : "SHOW"} SETTINGS:</label>
	<button class="hoverSelfAnnounce" style:--background={settingsToggle ? "#5386E4" : "#20201D"} on:click|preventDefault={() => {settingsToggle = !settingsToggle;}}></button>

	{#if settingsToggle}
	<label for="" class="left-column">DOWNLOAD AUTOMATICALLY:</label>
	<button class="hoverSelfAnnounce" style:--background={$downloadToggle ? "#5386E4" : "#20201D"} on:click|preventDefault={() => {$downloadToggle = !$downloadToggle;}}></button>
	<label for="" class="left-column">{$fileType ? "CSV" : "JSON"}</label>
	<!-- $fileType = !$fileType; for the next one -->
	<button class="hoverSelfAnnounce" style:--background={$fileType ? "#20201D" : "#5386E4"} on:click|preventDefault={() => {}}></button> 
	{/if}
</form>

<div class="navbar">
	<p class="padded">version 1.2</p>
</div>