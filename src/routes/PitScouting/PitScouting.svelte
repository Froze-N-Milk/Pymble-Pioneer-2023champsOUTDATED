<script lang="ts">
	import { PitScoutingArray } from './../Utils/stores.js';
    import { onMount } from "svelte";

	const regex = new RegExp("^[0-9]*$");

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
	let teamNumberSelector: string | number = ""
	$: teamNumberSelector = teamNumberSelector === "" ? $PitScoutingArray[0].teamNumber : teamNumberSelector;
	$: console.log("selected" + teamNumberSelector);
	$: console.log("initial" + $PitScoutingArray[0].teamNumber);

	$: SelectedPitScoutingEntry = $PitScoutingArray.filter(array => array.teamNumber === teamNumberSelector)[0] ?? $PitScoutingArray[0];

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


<h2 class="sectionHeader">PIT SCOUTING</h2>

<label for="" class="left-column">SCOUT NAME:</label>
<input autocomplete="off" class="hoverSelfAnnounce" inputmode="text" type="text" placeholder="SCOUT NAME" bind:value={SelectedPitScoutingEntry.scouterName} />

<label for="" class="left-column">TEAM #:</label>
<input autocomplete="off" id="teamNumber" class="hoverSelfAnnounce" type="text" inputmode="numeric" placeholder="TEAM NUMBER" bind:value={SelectedPitScoutingEntry.teamNumber} />

<div class="navbar">
	
	<select class="buttonLookAlike hoverSelfAnnounce" bind:value={teamNumberSelector}>
		{#each $PitScoutingArray.map(array => array.teamNumber) as option}
			<option value={option}>
				{option}
			</option>
		{/each}
	</select>
	
</div>