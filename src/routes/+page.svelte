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

	form input[type=text] {
		width: 12rem;
		grid-column: 2/3;
		border: 0px;
  		outline: 1px solid #151513;
		background: #20201D;
		color: snow;
		padding: 1rem;
		margin: none;
		text-align: left;
	}

	form input:focus {
		outline: 2px solid #D62246;
	}

	.sectionHeader {
		grid-column: 1/3;
		padding: 1rem;
	}

	.navbar {
		background-color: #20201D;
		overflow: hidden;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		display: inline-flex;
		text-align: center;
		justify-content: center;
		align-items: center;
	}

	.titlebar {
		background-color: #20201D;
		overflow: hidden;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
	}

	.padded {
		padding-top: none;
		padding-bottom: none;
		padding-left: 3rem;
		padding-right: 3rem;
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
	a {
		display: contents;
	}
</style>

<script lang="ts">
    import { downloadToggle, fileType } from "../Utils/stores";


    let settingsToggle: boolean = false;

    $:downloadToggleColour = $downloadToggle ? "#D62246" : "#20201D";
    $:settingsToggleColour = settingsToggle ? "#D62246" : "#20201D";
    $:fileTypeColour = $fileType ? "#20201D" : "#D62246";
</script>

<body>
	<div class="titlebar">
		<h1>PYMBLE PIONEER</h1>
	</div>

	<form>
		<!-- svelte-ignore a11y-missing-content -->
		<h1 class="sectionHeader"></h1>

		<label for="">PIT SCOUTING</label>
		<a href="/PitScouting">
			<button class="hoverSelfAnnounce" style:--background="#20201D"></button>
		</a>

		<label for="">MATCH SCOUTING</label>
		<a href="/MatchScouting">
			<button class="hoverSelfAnnounce" style:--background="#20201D"></button>
		</a>

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
</body>