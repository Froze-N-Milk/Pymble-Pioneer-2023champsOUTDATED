<script lang="ts">
	import { PitScoutingArray } from './../Utils/stores.js';
    import { onMount } from "svelte";
    import Selector from '../Utils/Selector.svelte';

	const regex = new RegExp("^[0-9]*$");

	onMount(() => {
		document.getElementById("matchNumber")?.addEventListener("beforeinput", (event) => {
			if (event.data != null && !regex.test(event.data)) {
				event.preventDefault();
			}
		});
		document.getElementById("width")?.addEventListener("beforeinput", (event) => {
			if (event.data != null && !regex.test(event.data)) {
				event.preventDefault();
			}
		});
		document.getElementById("length")?.addEventListener("beforeinput", (event) => {
			if (event.data != null && !regex.test(event.data)) {
				event.preventDefault();
			}
		});
		document.getElementById("weight")?.addEventListener("beforeinput", (event) => {
			if (event.data != null && !regex.test(event.data)) {
				event.preventDefault();
			}
		});
	});

	let formError: string;
	let selectedIndex = 0;
	$: console.log("selected" + selectedIndex);
	$: console.log("initial" + $PitScoutingArray[0].teamNumber);

	$: SelectedPitScoutingEntry = $PitScoutingArray.filter(array => array.teamNumber === $PitScoutingArray[selectedIndex].teamNumber)[0] ?? $PitScoutingArray[0];

	$:allowAdvance = SelectedPitScoutingEntry.scouterName !== "" && SelectedPitScoutingEntry.teamNumber !== "" && SelectedPitScoutingEntry.teamNumber !== "";
	
	$: {
		if(!allowAdvance){
			formError = "FORM UNFILLED";
		}
		else {
			formError = "";
		}
	}
</script>

<style>

	.buttonLookAlike {
		/* outline: 1px solid #151513; */
		background: #151513;
		/* background: #20201D; */
		color: snow;
		margin: none;
		text-align: center;
		padding-left: 2rem;
		padding-right: 2rem;
		overflow: hidden;
		border: none;
		height: calc(3rem);
		width: 10rem;
	}
	
</style>

<h2 class="sectionHeader">PIT SCOUTING</h2>

<form>
	<label for="" class="left-column">SCOUT NAME:</label>
	<input autocomplete="off" class="hoverSelfAnnounce" inputmode="text" type="text" placeholder="SCOUT NAME" bind:value={SelectedPitScoutingEntry.scouterName} />

	<label for="" class="left-column">TEAM #:</label>
	<input autocomplete="off" id="teamNumber" class="hoverSelfAnnounce" type="text" inputmode="numeric" placeholder="TEAM NUMBER" bind:value={SelectedPitScoutingEntry.teamNumber} />

	<label for="" class="left-column">DRIVE TRAIN TYPE :</label>
	<Selector options={["TANK", "SWERVE", "MECANUM", "OTHER"]} bind:value={SelectedPitScoutingEntry.driveTrainType} />

	<label for="" class="left-column">DRIVE TRAIN WIDTH (in):</label>
	<input autocomplete="off" id="width" class="hoverSelfAnnounce" type="text" inputmode="numeric" placeholder="WIDTH" bind:value={SelectedPitScoutingEntry.driveTrainSizeWidth} />

	<label for="" class="left-column">DRIVE TRAIN LENGTH (in):</label>
	<input autocomplete="off" id="length" class="hoverSelfAnnounce" type="text" inputmode="numeric" placeholder="LENGTH" bind:value={SelectedPitScoutingEntry.driveTrainSizeLength} />

	<label for="" class="left-column">ROBOT WEIGHT INCL. BATTERY (lb):</label>
	<input autocomplete="off" id="weight" class="hoverSelfAnnounce" type="text" inputmode="numeric" placeholder="WEIGHT" bind:value={SelectedPitScoutingEntry.robotWeight} />

	<p class="sectionHeader">AUTO PATHS:</p>
	<textarea class="sectionHeader hoverSelfAnnounce" rows="8" bind:value={SelectedPitScoutingEntry.autoPaths}></textarea>
	
	<p class="sectionHeader">COMMENTS:</p>
	<textarea class="sectionHeader hoverSelfAnnounce" rows="8" bind:value={SelectedPitScoutingEntry.comments}></textarea>


</form>
<div class="navbar">
	
	<select class="buttonLookAlike hoverSelfAnnounce" bind:value={selectedIndex}>
		{#each Array.from(Array($PitScoutingArray.length),(x,i)=>i) as option}
			<option value={option}>
				{$PitScoutingArray[option].teamNumber}
			</option>
		{/each}
	</select>
	
</div>