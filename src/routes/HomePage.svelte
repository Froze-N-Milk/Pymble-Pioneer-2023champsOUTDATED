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

	input[type = "file"] {
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
		background: var(--background);
		color: snow;
		margin: none;
		text-align: center;
	}

	.uploader:hover {
		background: #5386E4;
		cursor: pointer;
	}

	.line-wrapper {
		display: inline-flex;
		max-width: 14rem;
	}
</style>

<script lang="ts">
	import MergersAndAquisitions from './Mergers&&Aquisitions/MergersAndAquisitions.svelte';
    import { downloadToggle, fileType, MatchDataArray, PitScoutingArray, ScoutingPage, PitScoutingPhotosTaken, selectedIndex, AllianceScoutingArray } from "./Utils/stores";
    import MatchScouting from "./MatchScouting/MatchScouting.svelte";
    import PitScouting from "./PitScouting/PitScouting.svelte";
    import AllianceScouting from "./AllianceScouting/AllianceScouting.svelte";

    let settingsToggle: boolean = false;

	let matchDataFile: FileList;
	let pitScoutingFile: FileList;
	let allianceScoutingFile: FileList;

	async function importMatchData() {
		if(!matchDataFile) {return;}

		let fileJSON = JSON.parse(await matchDataFile[0].text());

		if (fileJSON && Array.from(fileJSON).length >= $MatchDataArray.length) {
			$MatchDataArray = fileJSON;

			$MatchDataArray.push({
				teamNumber: "",
				matchNumber: Number($MatchDataArray[$MatchDataArray.length - 1].matchNumber ?? 0) + 1,

				//auto
				autoTopCones: 0,
				autoMiddleCones: 0,
				autoLowCones: 0,
				autoTopCubes: 0,
				autoMiddleCubes: 0,
				autoLowCubes: 0,
			
				autoEngageAttempt: false,
				autoParking: "",
			
				//teleop
				teleopTopCones: 0,
				teleopMiddleCones: 0,
				teleopLowCones: 0,
				teleopTopCubes: 0,
				teleopMiddleCubes: 0,
				teleopLowCubes: 0,

				teleopDoubleCones: 0,
				teleopSingleCones: 0,
				teleopFloorCones: 0,
				teleopDoubleCubes: 0,
				teleopSingleCubes: 0,
				teleopFloorCubes: 0,
			
				teleopEngageAttempt: false,
				teleopParking: "",
			
				//fouls
				fouls: 0,
				techFouls: 0,
			
				//cycles
				cycles: 0,
			
				//other
				startingPosition: 0,

				scouterName: $MatchDataArray[$MatchDataArray.length - 1].scouterName,
				comments: ""
			});
		
			$selectedIndex = $MatchDataArray.length - 1;
		}
	}

	async function importPitScouting() {
		if(!pitScoutingFile) {
			return;
		}

		let fileJSON = JSON.parse(await pitScoutingFile[0].text());

		if (fileJSON && Array.from(fileJSON).length >= $PitScoutingArray.length) {
			$PitScoutingArray = fileJSON;
			$PitScoutingPhotosTaken = [];
			for (let index = 0; index < $PitScoutingArray.length; index++) {
				$PitScoutingPhotosTaken.push(true);
			}

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
		}
	}

	async function importAllianceScouting() {
		if(!allianceScoutingFile) {
			return;
		}

		let fileJSON = JSON.parse(await allianceScoutingFile[0].text());

		if (fileJSON && Array.from(fileJSON).length >= $AllianceScoutingArray.length) {
			$AllianceScoutingArray = fileJSON;
			$AllianceScoutingArray = [];

			$AllianceScoutingArray.push({
				matchNumber: "",
				teamRank1: "",
				defence1: false,
				comments1: "",
				teamRank2: "",
				defence2: false,
				comments2: "",
				teamRank3: "",
				defence3: false,
				comments3: "",
			});
		}
	}
</script>

<form on:submit|preventDefault>
	<label for="" class="left-column">PIT SCOUTING:</label>
	<div class="line-wrapper">
		<button class="hoverSelfAnnounce" style:--background="#20201D" on:click={() => {$ScoutingPage = PitScouting; importPitScouting();}}></button>
		
		<div style="width: 2px;"/>
		<input type="file" name="pit-uploader" id="pit-uploader" bind:files={pitScoutingFile}>
		<label for="pit-uploader" class="uploader" style:--background={pitScoutingFile ? "#5386E4" :"#20201D" }> ^ </label>
	</div>

	<label for="" class="left-column">MATCH SCOUTING:</label>
	<div class="line-wrapper">
		<button class="hoverSelfAnnounce" style:--background="#20201D" on:click={() => {$ScoutingPage = MatchScouting; importMatchData();}}></button>
		
		<div style="width: 2px;"/>
		<input type="file" name="match-uploader" id="match-uploader"  bind:files={matchDataFile}>
		<label for="match-uploader" class="uploader" style:--background={matchDataFile ? "#5386E4" :"#20201D" }> ^ </label>
	</div>

	<label for="" class="left-column">ALLIANCE SCOUTING:</label>
	<div class="line-wrapper">
		<button class="hoverSelfAnnounce" style:--background="#20201D" on:click={() => {$ScoutingPage = AllianceScouting; importAllianceScouting();}}></button>
		
		<div style="width: 2px;"/>
		<input type="file" name="match-uploader" id="match-uploader"  bind:files={allianceScoutingFile}>
		<label for="match-uploader" class="uploader" style:--background={allianceScoutingFile ? "#5386E4" :"#20201D" }> ^ </label>
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
	
	<label for="" class="left-column">MERGERS && AQUISITIONS:</label>
	<button class="hoverSelfAnnounce" style:--background={"#20201D"} on:click|preventDefault={() => $ScoutingPage = MergersAndAquisitions}></button>

	{/if}
</form>

<div class="navbar">
	<p class="padded">version 1.2</p>
</div>