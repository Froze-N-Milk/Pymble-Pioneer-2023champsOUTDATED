<script lang="ts">
	import { fileType, PitScoutingArray, PitScoutingPhotosTaken } from './../Utils/stores.js';
    import { onMount } from "svelte";
    import Selector from '../Utils/Selector.svelte';

	const regex = new RegExp("[0-9]");

	onMount(() => {
		document.getElementById("teamNumber")?.addEventListener("beforeinput", (event) => {
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
	let selectedIndex = $PitScoutingArray.length - 1;

	$: SelectedPitScoutingEntry = $PitScoutingArray.filter(array => array.teamNumber === $PitScoutingArray[selectedIndex].teamNumber)[0] ?? $PitScoutingArray[0];

	$: allowAdvance = SelectedPitScoutingEntry.scouterName !== "" && SelectedPitScoutingEntry.teamNumber !== "" && SelectedPitScoutingEntry.driveTrainType !== "" && SelectedPitScoutingEntry.driveTrainSizeLength !== "" && SelectedPitScoutingEntry.driveTrainSizeWidth !== "" && SelectedPitScoutingEntry.robotWeight !== "" && $PitScoutingPhotosTaken[selectedIndex] === true;
	
	$: {
		if(!allowAdvance){
			formError = "FORM UNFILLED";
		}
		else {
			formError = "";
		}
	}

	let urlContent;
	let content = "";
	let href: string;
	let downloadname: string;

	function prepDownload() {
		$PitScoutingArray.forEach(array => {
			array.teamNumber = Number(array.teamNumber);
			array.teamNumber = Number(array.teamNumber);
			array.teamNumber = Number(array.teamNumber);
			array.teamNumber = Number(array.teamNumber);

		});

		if($fileType) {
			
			let csv: string = "";

			let keys = Object.keys($PitScoutingArray[0]);

			// Build header
			csv += keys.join(",") + "\n";

			// Add the rows
			$PitScoutingArray.forEach((obj: any) => {
				csv += keys.map(k => obj[k]).join(",") + "\n";
			});
			
			urlContent = "data:text/csv;charset=utf-8," + csv;
			content = csv;
			href = urlContent;
			downloadname = $PitScoutingArray.length + "Teams" + $PitScoutingArray[0].teamNumber + "To" + $PitScoutingArray[$PitScoutingArray.length - 1].teamNumber + "PitScoutedBy" + $PitScoutingArray[$PitScoutingArray.length - 1].scouterName + ".csv";
		}
		else {
			urlContent = "data:text/json;charset=utf-8," + JSON.stringify($PitScoutingArray);
			content = JSON.stringify($PitScoutingArray[$PitScoutingArray.length - 1]);
			href = urlContent;
			downloadname = $PitScoutingArray.length + "Teams" + $PitScoutingArray[0].teamNumber + "To" + $PitScoutingArray[$PitScoutingArray.length - 1].teamNumber + "PitScoutedBy" + $PitScoutingArray[$PitScoutingArray.length - 1].scouterName + ".json";
		}
	}

	$: if(allowAdvance) {
		prepDownload();
	}

	function newTeam(): void {
		$PitScoutingArray.push({
			teamNumber: "",
			scouterName: $PitScoutingArray[$PitScoutingArray.length - 1].scouterName,
			driveTrainType: "",
			driveTrainSizeWidth: "",
			driveTrainSizeLength: "",
			robotWeight: "",
			autoPaths: "",
			comments: ""
		});
		$PitScoutingPhotosTaken.push(false);

		selectedIndex = $PitScoutingArray.length - 1;
	}

	$: arrayIndexes = Array.from(Array($PitScoutingArray.length),(x,i)=>i);
</script>

<style>

	a {
		text-decoration: none;
		color: snow;
		font-family: "Roboto";
	}

	.buttonLookAlike {
		grid-column: 1/3;
		outline: none;
		border: none;
		background: #20201D;
		color: snow;
		height: calc(3rem);
		aspect-ratio: 5/1;
		align-items: center;
		margin: auto;
		text-align: center;
		overflow: hidden;
		padding-top: none;
		padding-bottom: none;
		cursor: pointer;
	}
	
	.error {
		color: #5386E4;
		height: 1rem;
		padding: 1rem;
	}

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

<h2 class="sectionHeader">PIT SCOUTING</h2>

<form on:submit|preventDefault>
	<label for="" class="left-column">SCOUT NAME:</label>
	<input autocomplete="off" class="hoverSelfAnnounce" inputmode="text" type="text" placeholder="SCOUT NAME" bind:value={SelectedPitScoutingEntry.scouterName} />

	<label for="" class="left-column">TEAM #:</label>
	<input autocomplete="off" id="teamNumber" class="hoverSelfAnnounce" type="text" inputmode="numeric" placeholder="TEAM NUMBER" bind:value={SelectedPitScoutingEntry.teamNumber} />

	<label for="" class="left-column">DRIVE TRAIN TYPE :</label>
	<Selector options={["TANK", "SWERVE", "MECANUM", "OTHER"]} bind:value={SelectedPitScoutingEntry.driveTrainType} />

	<label for="" class="left-column">DRIVE TRAIN WIDTH INCL. BUMPERS (in):</label>
	<input autocomplete="off" id="width" class="hoverSelfAnnounce" type="text" inputmode="numeric" placeholder="WIDTH" bind:value={SelectedPitScoutingEntry.driveTrainSizeWidth} />

	<label for="" class="left-column">DRIVE TRAIN LENGTH INCL. BUMPERS (in):</label>
	<input autocomplete="off" id="length" class="hoverSelfAnnounce" type="text" inputmode="numeric" placeholder="LENGTH" bind:value={SelectedPitScoutingEntry.driveTrainSizeLength} />

	<label for="" class="left-column">ROBOT WEIGHT INCL. BATTERY AND BUMPERS (lb):</label>
	<input autocomplete="off" id="weight" class="hoverSelfAnnounce" type="text" inputmode="numeric" placeholder="WEIGHT" bind:value={SelectedPitScoutingEntry.robotWeight} />

	<p class="sectionHeader">AUTO PATHS:</p>
	<textarea class="sectionHeader hoverSelfAnnounce" rows="8" bind:value={SelectedPitScoutingEntry.autoPaths}></textarea>
	
	<p class="sectionHeader">COMMENTS:</p>
	<textarea class="sectionHeader hoverSelfAnnounce" rows="8" bind:value={SelectedPitScoutingEntry.comments}></textarea>

	<div class="sectionHeader" style="height: 1rem;"></div>

	<label for="" class="left-column">PHOTOS:</label>
	<button class="hoverSelfAnnounce" style:--background={$PitScoutingPhotosTaken[selectedIndex] ? "#5386E4" : "#20201D"} on:click|preventDefault={() => $PitScoutingPhotosTaken[selectedIndex] = !$PitScoutingPhotosTaken[selectedIndex]}></button>

	{#if allowAdvance}
		<div class="sectionHeader" style="height: 1rem;"></div>
		<a class="buttonLookAlike" id="downloader" {href} download={downloadname} target="_self" on:click={prepDownload}>
			<div style="padding-top: calc(1rem);">DOWNLOAD</div>
		</a>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="buttonLookAlike" on:click={newTeam}>
			<div style="padding-top: calc(1rem);">NEW TEAM</div>
		</div>
	{:else}
		<div class="sectionHeader error">{formError}</div>
	{/if}
</form>

<div class="navbar">
	
	<select class="buttonLookAlike hoverSelfAnnounce" bind:value={selectedIndex}>
		{#each arrayIndexes as option}
			<option value={option}>
				{$PitScoutingArray[option].teamNumber}
			</option>
		{/each}
	</select>
	
</div>