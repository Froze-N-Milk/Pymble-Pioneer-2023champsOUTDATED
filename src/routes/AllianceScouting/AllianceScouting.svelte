<script lang="ts">
    import { onMount } from "svelte";
    import { AllianceScoutingArray, fileType } from "../Utils/stores";

	let selectedIndex = $AllianceScoutingArray.length - 1;
	$: SelectedAllianceScoutingEntry = $AllianceScoutingArray.filter(array => array.matchNumber === $AllianceScoutingArray[selectedIndex].matchNumber)[0] ?? $AllianceScoutingArray[0];;

	const regex = new RegExp("[0-9]");

	onMount(() => {
		document.getElementById("teamNumber")?.addEventListener("beforeinput", (event) => {
			if (event.data != null && !regex.test(event.data)) {
				event.preventDefault();
			}
		});
		document.getElementById("team1")?.addEventListener("beforeinput", (event) => {
			if (event.data != null && !regex.test(event.data)) {
				event.preventDefault();
			}
		});
		document.getElementById("team2")?.addEventListener("beforeinput", (event) => {
			if (event.data != null && !regex.test(event.data)) {
				event.preventDefault();
			}
		});
		document.getElementById("team3")?.addEventListener("beforeinput", (event) => {
			if (event.data != null && !regex.test(event.data)) {
				event.preventDefault();
			}
		});
	});

	function newTeam(): void {
		$AllianceScoutingArray.push({
			matchNumber: "",
			teamRank1: "",
			defence1: false,
			teamRank2: "",
			defence2: false,
			teamRank3: "",
			defence3: false
		});

		selectedIndex = $AllianceScoutingArray.length - 1;
	}

	$: arrayIndexes = Array.from(Array($AllianceScoutingArray.length),(x,i)=>i);

	let urlContent;
	let content = "";
	let href: string;
	let downloadname: string;

	function prepDownload() {
		$AllianceScoutingArray.forEach(array => {
			array.matchNumber = Number(array.matchNumber);
			array.teamRank1 = Number(array.teamRank1);
			array.teamRank2 = Number(array.teamRank2);
			array.teamRank3 = Number(array.teamRank3);
		});

		if($fileType) {
			
			let csv: string = "";

			let keys = Object.keys($AllianceScoutingArray[0]);

			// Build header
			csv += keys.join(",") + "\n";

			// Add the rows
			$AllianceScoutingArray.forEach((obj: any) => {
				csv += keys.map(k => obj[k]).join(",") + "\n";
			});
			
			urlContent = "data:text/csv;charset=utf-8," + csv;
			content = csv;
			href = urlContent;
			downloadname = "AllianceScoutingMatches" + $AllianceScoutingArray[1].matchNumber + "to" + $AllianceScoutingArray[$AllianceScoutingArray.length - 1].matchNumber + ".csv";
		}
		else {
			urlContent = "data:text/json;charset=utf-8," + JSON.stringify($AllianceScoutingArray);
			content = JSON.stringify($AllianceScoutingArray[$AllianceScoutingArray.length - 1]);
			href = urlContent;
			downloadname = "AllianceScoutingMatches" + $AllianceScoutingArray[1].matchNumber + "to" + $AllianceScoutingArray[$AllianceScoutingArray.length - 1].matchNumber + ".json";
		}
	}
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
	
	/*
	.error {
		color: #5386E4;
		height: 1rem;
		padding: 1rem;
	}
	*/

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


<form on:submit|preventDefault>
	<label for="" class="left-column">MATCH #:</label>
	<input autocomplete="off" class="hoverSelfAnnounce" id="teamNumber" inputmode="text" type="text" placeholder="MATCH NUMBER" bind:value={SelectedAllianceScoutingEntry.matchNumber} />

	<p class="sectionHeader">TEAMS:</p>

	<input autocomplete="off" class="hoverSelfAnnounce left-column" id="team1" inputmode="text" type="text" placeholder="TEAM #1" bind:value={SelectedAllianceScoutingEntry.teamRank1} />
	<button class="hoverSelfAnnounce" style:--background={SelectedAllianceScoutingEntry.defence1 ? "#5386E4" : "#20201D"} on:click|preventDefault={() => SelectedAllianceScoutingEntry.defence1 = !SelectedAllianceScoutingEntry.defence1}></button>

	<input autocomplete="off" class="hoverSelfAnnounce left-column" id="team2" inputmode="text" type="text" placeholder="TEAM #2" bind:value={SelectedAllianceScoutingEntry.teamRank2} />
	<button class="hoverSelfAnnounce" style:--background={SelectedAllianceScoutingEntry.defence2 ? "#5386E4" : "#20201D"} on:click|preventDefault={() => SelectedAllianceScoutingEntry.defence2 = !SelectedAllianceScoutingEntry.defence2}></button>

	<input autocomplete="off" class="hoverSelfAnnounce left-column" id="team3" inputmode="text" type="text" placeholder="TEAM #3" bind:value={SelectedAllianceScoutingEntry.teamRank3} />
	<button class="hoverSelfAnnounce" style:--background={SelectedAllianceScoutingEntry.defence3 ? "#5386E4" : "#20201D"} on:click|preventDefault={() => SelectedAllianceScoutingEntry.defence3 = !SelectedAllianceScoutingEntry.defence3}></button>

	<div class="sectionHeader" style="height: 1rem;"></div>
		<a class="buttonLookAlike" id="downloader" {href} download={downloadname} target="_self" on:click={prepDownload}>
			<div style="padding-top: calc(1rem);">DOWNLOAD</div>
		</a>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="buttonLookAlike" on:click={newTeam}>
			<div style="padding-top: calc(1rem);">NEW TEAM</div>
		</div>
</form>

<div class="navbar">
	
	<select class="buttonLookAlike hoverSelfAnnounce" bind:value={selectedIndex}>
		{#each arrayIndexes as option}
			<option value={option}>
				{$AllianceScoutingArray[option].matchNumber}
			</option>
		{/each}
	</select>
	
</div>