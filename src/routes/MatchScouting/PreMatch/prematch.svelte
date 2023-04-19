<script lang="ts">
	import { MatchDataArray, SelectedMatchDataEntry, matchDataArrayIndexes } from '../../Utils/stores.js';
    import { onMount } from "svelte/internal";
    import { fade } from 'svelte/transition';
    import Selector from '../../Utils/Selector.svelte';
	
	const regex = new RegExp("[0-9]");

	// enables input validation for these two form inputs
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

	$:allowAdvance = $SelectedMatchDataEntry.scouterName !== "" && $SelectedMatchDataEntry.teamNumber !== "" && $SelectedMatchDataEntry.teamNumber !== "" && $SelectedMatchDataEntry.matchNumber !== 0 && $SelectedMatchDataEntry.matchNumber !== "" && $SelectedMatchDataEntry.startingPosition !== 0;
	
	$: {
		if(!allowAdvance){
			formError = "FORM UNFILLED";
		}
		else {
			formError = "";
		}
	}

	const startingPositions = [1, 2, 3, 4];

</script>

<style>
	.error {
		color: #5386E4;
		height: 1rem;
		padding: 1rem;
	}
</style>


<h2 class="sectionHeader">PRE MATCH INFORMATION</h2>

<label for="" class="left-column">SCOUT NAME:</label>
<input autocomplete="off" class="hoverSelfAnnounce" inputmode="text" type="text" placeholder="SCOUT NAME" bind:value={$SelectedMatchDataEntry.scouterName} />

<label for="" class="left-column">MATCH #:</label>
<input autocomplete="off" id="matchNumber" class="hoverSelfAnnounce" type="text" inputmode="numeric" placeholder="MATCH NUMBER" bind:value={$SelectedMatchDataEntry.matchNumber} on:input={() => $matchDataArrayIndexes = Array.from(Array($MatchDataArray.length),(x,i)=>i)}/>

<label for="" class="left-column">TEAM #:</label>
<input autocomplete="off" id="teamNumber" class="hoverSelfAnnounce" type="text" inputmode="numeric" placeholder="TEAM NUMBER" bind:value={$SelectedMatchDataEntry.teamNumber} />

<label for="" class="left-column">STARTING POSITION:</label>
<Selector options={startingPositions} bind:value={$SelectedMatchDataEntry.startingPosition} />

<div class="sectionHeader error">
	{#key formError}
		<div transition:fade|local>{formError}</div>
	{/key}
</div>
