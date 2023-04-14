<script lang="ts">
    import { onMount } from "svelte";
    import { AllianceScoutingArray, fileType } from "../Utils/stores";
    import { fade } from "svelte/transition";

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
			matchNumber: Number($AllianceScoutingArray[$AllianceScoutingArray.length - 1].matchNumber) + 1,
			teamRank1: "",
			defence1: false,
			teamRank2: "",
			defence2: false,
			teamRank3: "",
			defence3: false
		});

		$AllianceScoutingArray = $AllianceScoutingArray;
		selectedIndex = $AllianceScoutingArray.length - 1;

	}

	$: arrayIndexes = Array.from(Array($AllianceScoutingArray.length),(x,i)=>i);

	let urlContent1;
	let urlContent2;
	let urlContent3;
	let href1: string;
	let href2: string;
	let href3: string;

	let downloadname1: string;
	let downloadname2: string;
	let downloadname3: string;

	type individualisedArray = {
		matchNumber: string | number, 
		teamNumber: string | number, 
		defence: boolean,
		rank: number
	}

	function prepDownload() {
		let rank1Array: individualisedArray[] = [];
		let rank2Array: individualisedArray[] = [];
		let rank3Array: individualisedArray[] = [];

		$AllianceScoutingArray.forEach(array => {
			array.matchNumber = Number(array.matchNumber);
			array.teamRank1 = Number(array.teamRank1);
			array.teamRank2 = Number(array.teamRank2);
			array.teamRank3 = Number(array.teamRank3);
		});

		$AllianceScoutingArray.forEach(array => {
			rank1Array.push({matchNumber: array.matchNumber, teamNumber: array.teamRank1, defence: array.defence1, rank: 1});
			rank2Array.push({matchNumber: array.matchNumber, teamNumber: array.teamRank2, defence: array.defence2, rank: 2});
			rank3Array.push({matchNumber: array.matchNumber, teamNumber: array.teamRank3, defence: array.defence3, rank: 3});
		});

		if($fileType) {
			
			let csv1: string = "";

			let keys1 = Object.keys(rank1Array[0]);

			// Build header
			csv1 += keys1.join(",") + "\n";

			// Add the rows
			rank1Array.forEach((obj: any) => {
				csv1 += keys1.map(k => obj[k]).join(",") + "\n";
			});
			
			urlContent1 = "data:text/csv;charset=utf-8," + csv1;
			href1 = urlContent1;
			downloadname1 = "Rank1AllianceScoutingMatches" + rank1Array[0].matchNumber + "to" + rank1Array[rank1Array.length - 1].matchNumber + ".csv";
		
			let csv2: string = "";

			let keys2 = Object.keys(rank2Array[0]);

			// Build header
			csv2 += keys2.join(",") + "\n";

			// Add the rows
			rank2Array.forEach((obj: any) => {
				csv2 += keys2.map(k => obj[k]).join(",") + "\n";
			});
			
			urlContent2 = "data:text/csv;charset=utf-8," + csv2;
			href2 = urlContent2;
			downloadname2 = "Rank2AllianceScoutingMatches" + rank2Array[0].matchNumber + "to" + rank2Array[rank3Array.length - 1].matchNumber + ".csv";

			let csv3: string = "";

			let keys3 = Object.keys(rank3Array[0]);

			// Build header
			csv3 += keys3.join(",") + "\n";

			// Add the rows
			rank3Array.forEach((obj: any) => {
				csv3 += keys3.map(k => obj[k]).join(",") + "\n";
			});
			
			urlContent3 = "data:text/csv;charset=utf-8," + csv3;
			href3 = urlContent3;
			downloadname3 = "Rank3AllianceScoutingMatches" + rank3Array[0].matchNumber + "to" + rank3Array[rank3Array.length - 1].matchNumber + ".csv";

		}
		else {
			urlContent1 = "data:text/json;charset=utf-8," + JSON.stringify(rank1Array);
			href1 = urlContent1;
			downloadname1 = "Rank1AllianceScoutingMatches" + rank1Array[0].matchNumber + "to" + rank1Array[rank1Array.length - 1].matchNumber + ".json";
		
			urlContent2 = "data:text/json;charset=utf-8," + JSON.stringify(rank2Array);
			href2 = urlContent1;
			downloadname2 = "Rank2AllianceScoutingMatches" + rank2Array[0].matchNumber + "to" + rank2Array[rank2Array.length - 1].matchNumber + ".json";

			urlContent3 = "data:text/json;charset=utf-8," + JSON.stringify(rank3Array);
			href3 = urlContent3;
			downloadname3 = "Rank3AllianceScoutingMatches" + rank3Array[0].matchNumber + "to" + rank3Array[rank3Array.length - 1].matchNumber + ".json";

		}
	}

	$: allowAdvance = SelectedAllianceScoutingEntry.matchNumber !== "";

	let download1: HTMLAnchorElement;
	let download2: HTMLAnchorElement;
	let download3: HTMLAnchorElement;
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

	<div class="sectionHeader" style="height: 1rem;"></div>
	<p class="sectionHeader">RANKINGS:</p>

	<p class="left-column">TEAMS:</p>	<p class="right-column">DEFENCE:</p>


	<input autocomplete="off" class="hoverSelfAnnounce left-column" id="team1" inputmode="text" type="text" placeholder="TEAM #1" bind:value={SelectedAllianceScoutingEntry.teamRank1} />
	<button class="hoverSelfAnnounce" style:--background={SelectedAllianceScoutingEntry.defence1 ? "#5386E4" : "#20201D"} on:click|preventDefault={() => SelectedAllianceScoutingEntry.defence1 = !SelectedAllianceScoutingEntry.defence1}></button>

	<input autocomplete="off" class="hoverSelfAnnounce left-column" id="team2" inputmode="text" type="text" placeholder="TEAM #2" bind:value={SelectedAllianceScoutingEntry.teamRank2} />
	<button class="hoverSelfAnnounce" style:--background={SelectedAllianceScoutingEntry.defence2 ? "#5386E4" : "#20201D"} on:click|preventDefault={() => SelectedAllianceScoutingEntry.defence2 = !SelectedAllianceScoutingEntry.defence2}></button>

	<input autocomplete="off" class="hoverSelfAnnounce left-column" id="team3" inputmode="text" type="text" placeholder="TEAM #3" bind:value={SelectedAllianceScoutingEntry.teamRank3} />
	<button class="hoverSelfAnnounce" style:--background={SelectedAllianceScoutingEntry.defence3 ? "#5386E4" : "#20201D"} on:click|preventDefault={() => SelectedAllianceScoutingEntry.defence3 = !SelectedAllianceScoutingEntry.defence3}></button>

	{#if allowAdvance}
		<div class="sectionHeader" style="height: 1rem;" transition:fade|local></div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<a transition:fade|local class="buttonLookAlike" id="downloader" on:click={() => {prepDownload(); download1.click(); download2.click(); download3.click();}}>
			<div style="padding-top: calc(1rem);">DOWNLOAD ALL</div>
		</a>
		<div class="sectionHeader" style="height: 2rem;" transition:fade|local></div>


		<a transition:fade|local class="buttonLookAlike" id="downloader" href={href1} download={downloadname1} target="_self" on:click={prepDownload} bind:this={download1}>
			<div style="padding-top: calc(1rem);">DOWNLOAD RANK 1</div>
		</a>
		<a transition:fade|local class="buttonLookAlike" id="downloader" href={href2} download={downloadname2} target="_self" on:click={prepDownload} bind:this={download2}>
			<div style="padding-top: calc(1rem);">DOWNLOAD RANK 2</div>
		</a>
		<a transition:fade|local class="buttonLookAlike" id="downloader" href={href3} download={downloadname3} target="_self" on:click={prepDownload} bind:this={download3}>
			<div style="padding-top: calc(1rem);">DOWNLOAD RANK 3</div>
		</a>
		<div class="sectionHeader" style="height: 2rem;" transition:fade|local></div>


		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div transition:fade|local class="buttonLookAlike" on:click={newTeam}>
			<div style="padding-top: calc(1rem);">NEW MATCH</div>
		</div>
	{/if}
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