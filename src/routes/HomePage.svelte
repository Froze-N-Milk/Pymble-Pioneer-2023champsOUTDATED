<style>
	body {
		text-align: center;
		font-family: "Roboto";
		color: snow;
		background-color: #151513;

	}

	form {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 20px;
		row-gap: 4px;
		justify-content: center;
		align-items: center;
	}

	form label {
		justify-content: right;
		align-items: right;
		text-align: right;
		grid-column: 1/2;
		height: auto;
		vertical-align: auto;
	}

	.sectionHeader {
		grid-column: 1/3;
		padding: 1rem;
	}

	.titlebar {
		background-color: #20201D;
		overflow: hidden;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 5rem;
	}

	.hoverSelfAnnounce:hover {
		outline: 2px solid #D62246;
		cursor: pointer;
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

	.content {
		padding: 1.5rem;
		font-size: 2rem;
	}
</style>

<script lang="ts">
    import { downloadToggle, fileType, ScoutingPage } from "../Utils/stores";
    import MatchScouting from "./MatchScouting/MatchScouting.svelte";
    import PitScouting from "./PitScouting/PitScouting.svelte";

    let settingsToggle: boolean = false;

    $:downloadToggleColour = $downloadToggle ? "#D62246" : "#20201D";
    $:settingsToggleColour = settingsToggle ? "#D62246" : "#20201D";
    $:fileTypeColour = $fileType ? "#20201D" : "#D62246";
</script>

<body>
	<div class="titlebar">
		<div class="content">PYMBLE PIONEER</div>
	</div>

	<form>
		<label for="">PIT SCOUTING:</label>
		<button class="hoverSelfAnnounce" style:--background="#20201D" on:click={() => $ScoutingPage = PitScouting}></button>

		<label for="">MATCH SCOUTING:</label>
		<button class="hoverSelfAnnounce" style:--background="#20201D" on:click={() => $ScoutingPage = MatchScouting}></button>

		<p class="sectionHeader">SETTINGS</p>
			
		<label for="">{settingsToggle ? "HIDE" : "SHOW"} SETTINGS</label>
		<button class="hoverSelfAnnounce" style:--background={settingsToggleColour} on:click|preventDefault={() => {settingsToggle = !settingsToggle;}}></button>


		{#if settingsToggle}
		<label for="">DOWNLOAD AUTOMATICALLY</label>
		<button class="hoverSelfAnnounce" style:--background={downloadToggleColour} on:click|preventDefault={() => {$downloadToggle = !$downloadToggle;}}></button>
		<label for="">{$fileType ? "CSV" : "JSON"}</label>
		<button class="hoverSelfAnnounce" style:--background={fileTypeColour} on:click|preventDefault={() => {$fileType = !$fileType;}}></button>
		{/if}
	</form>

	<div class="navbar">
		<p class="padded">version 1.0</p>
	</div>
</body>