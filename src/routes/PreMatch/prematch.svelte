<script lang="ts">
	import { downloadToggle, matchData } from '../../Utils/stores.js';
    import { onMount, prevent_default } from "svelte/internal";
    import { fade } from 'svelte/transition';

	const required: boolean = true;
	let settingsToggle: boolean = false;

	$:downloadToggleColour = $downloadToggle ? "#D62246" : "#20201D"
	$:settingsToggleColour = settingsToggle ? "#D62246" : "#20201D"

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
	$:allowAdvance = $matchData[0] !== "" && $matchData[1] !== undefined && $matchData[1] !== "" && $matchData[2] !== undefined && $matchData[2] !== "";
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
	<input {required} inputmode="text" type="text" placeholder="SCOUT NAME" bind:value={$matchData[0]} />

	<label for="">MATCH #:</label>
	<input id="matchNumber" {required} type="text" inputmode="numeric" placeholder="MATCH NUMBER" bind:value={$matchData[1]} />

	<label for="">TEAM #:</label>
	<input id="teamNumber" {required} type="text" inputmode="numeric" placeholder="TEAM NUMBER" bind:value={$matchData[2]} />

	<div class="sectionHeader error">
		{#key formError}
			<div transition:fade|local>{formError}</div>
		{/key}
	</div>
	

	<label for="">{settingsToggle ? "HIDE" : "SHOW"} SETTINGS</label>
	<button style:--background={settingsToggleColour} on:click|preventDefault={() => {settingsToggle = !settingsToggle;}}></button>


	{#if settingsToggle}
	<label for="">DOWNLOAD AUTOMATICALLY</label>
	<button style:--background={downloadToggleColour} on:click|preventDefault={() => {$downloadToggle = !$downloadToggle;}}></button>
	{/if}
</div>