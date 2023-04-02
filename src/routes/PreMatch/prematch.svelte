<script lang="ts">
	import { downloadToggle, fileType, MatchDataArray } from '../../Utils/stores.js';
    import { onMount } from "svelte/internal";
    import { fade } from 'svelte/transition';
    import Selector from '../../Utils/Selector.svelte';

	const required: boolean = true;
	let settingsToggle: boolean = false;

	$:downloadToggleColour = $downloadToggle ? "#D62246" : "#20201D";
	$:settingsToggleColour = settingsToggle ? "#D62246" : "#20201D";
	$:fileTypeColour = $fileType ? "#20201D" : "#D62246";


	const regex = new RegExp("^[0-9]*$");

	// enables input validation for these two form inputs, 👍
	onMount(() => {
		document.getElementById("matchNumber")?.addEventListener("beforeinput", (event) => {
			if (event.data != null && !regex.test(event.data)) {
				event.preventDefault();
			}
		});
		document.getElementById("teamNumber")?.addEventListener("beforeinput", (event) => {
			if (event.data != null && !regex.test(event.data)) {
				event.preventDefault();
			}
		});
	});

	let formError: string;

	$:allowAdvance = $MatchDataArray[$MatchDataArray.length - 1].scouterName !== "" && $MatchDataArray[$MatchDataArray.length - 1].teamNumber !== null && $MatchDataArray[$MatchDataArray.length - 1].matchNumber !== null && $MatchDataArray[$MatchDataArray.length - 1].startingPosition !== 0;
	
	$: {
		if(!allowAdvance){
			formError = "FORM UNFILLED";
		}
		else {
			formError = "";
		}
	}

	const startingPositions = [1, 2, 3, 4, 5];

</script>

<style>
	.error {
		color: #D62246;
		height: 1rem;
	}

	button {
		padding: none;
		height: calc(3rem);
		width: 14rem;
		border: none;
		background: var(--background);
		color: snow;
		margin: none;
		outline: 1px solid #151513;
	}
</style>

<div style="display: contents;">
	<h2 class="sectionHeader">PRE MATCH INFORMATION</h2>

	<label for="">SCOUT NAME:</label>
	<input autocomplete="off" class="hoverSelfAnnounce" inputmode="text" type="text" placeholder="SCOUT NAME" bind:value={$MatchDataArray[$MatchDataArray.length - 1].scouterName} />

	<label for="">MATCH #:</label>
	<input autocomplete="off" id="matchNumber" class="hoverSelfAnnounce" type="text" inputmode="numeric" placeholder="MATCH NUMBER" bind:value={$MatchDataArray[$MatchDataArray.length - 1].matchNumber} />

	<label for="">TEAM #:</label>
	<input autocomplete="off" id="teamNumber" class="hoverSelfAnnounce" type="text" inputmode="numeric" placeholder="TEAM NUMBER" bind:value={$MatchDataArray[$MatchDataArray.length - 1].teamNumber} />

	<label for="">STARTING POSITION:</label>
	<Selector options={startingPositions} bind:value={$MatchDataArray[$MatchDataArray.length - 1].startingPosition} />

	<div class="sectionHeader error">
		{#key formError}
			<div transition:fade|local>{formError}</div>
		{/key}
	</div>
	

	<label for="">{settingsToggle ? "HIDE" : "SHOW"} SETTINGS</label>
	<button class="hoverSelfAnnounce" style:--background={settingsToggleColour} on:click|preventDefault={() => {settingsToggle = !settingsToggle;}}></button>


	{#if settingsToggle}
	<label for="">DOWNLOAD AUTOMATICALLY</label>
	<button class="hoverSelfAnnounce" style:--background={downloadToggleColour} on:click|preventDefault={() => {$downloadToggle = !$downloadToggle;}}></button>
	<label for="">{$fileType ? "CSV" : "JSON"}</label>
	<button class="hoverSelfAnnounce" style:--background={fileTypeColour} on:click|preventDefault={() => {$fileType = !$fileType;}}></button>
	{/if}
</div>