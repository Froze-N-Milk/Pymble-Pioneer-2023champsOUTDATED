<script lang="ts">
    import { ScoutingPage } from "./Utils/stores";
    import HomePage from "./HomePage.svelte";

	let screenWidth: number;
</script>
<style>
	body {
		color: snow;
		background-color: #151513;
		margin: 20px;
		box-sizing: border-box;

	}

	:global(*) {
		font-family: "Roboto";
		text-align: center;
	}

	:global(form) {
		display: contents;
		overflow: scroll;
	}

	:global(.left-column) {
		align-self: center;
		justify-self: end;
		min-width: 5rem;
		overflow: scroll;
	}

	:global(.right-column) {
		align-self: center;
		justify-self: start;
		max-width: 14rem;
		min-width: 5rem;
	}

	:global(form input[type=text]) {
		border: 0px;
  		outline: 1px solid #151513;
		background: #20201D;
		color: snow;
		padding: 1rem;
		margin: none;
		text-align: left;
	}

	:global(form input) {
		max-width: 12rem;
		min-width: 5rem;
	}

	:global(form input:focus) {
		outline: 2px solid #D62246;
	}

	:global(.sectionHeader) {
		grid-column: 1/3;
		padding: none;
	}

	
	:global(.navbar) {
		background-color: #20201D;
		overflow: hidden;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 3rem;
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
		height: 5rem;
	}

	:global(.padded) {
		padding-top: none;
		padding-bottom: none;
		padding-left: 3rem;
		padding-right: 3rem;
	}

	:global(.hoverSelfAnnounce:hover) {
		/* outline: 2px solid #D62246; */
		background: #D62246;
		cursor: pointer;
	}

	@media(min-width: 500px) {
		.return {
		padding: none;
		height: 5rem;
		border: none;
		background: #151513;
		color: snow;
		margin: none;
		width: 8rem;
		position: fixed;
		left: 0;
		top: 0;
		}

		.variable-buffer {
			height: 5rem;
		}
	}

	@media(max-width: 500px) {
		.return {
		padding: none;
		height: 3rem;
		border: none;
		background: #151513;
		color: snow;
		margin: none;
		width: 100%;
		position: fixed;
		left: 0;
		top: 5rem;
		}
	}

	.return:hover {
		background: #D62246;
		cursor: pointer;
	}

	.content {
		padding: 1.5rem;
		font-size: 2rem;
	}

	.grid-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 1rem;
		row-gap: 0.2rem;
		justify-content: center;
		overflow: scroll;
		grid-auto-flow: row;
	}

	.variable-buffer {
		height: var(--height);
	}
</style>


<svelte:window bind:innerWidth={screenWidth} />

<body>

	<div class="titlebar">
		{#if $ScoutingPage !== HomePage}
			<button class="return" on:click={() => $ScoutingPage = HomePage}>RETURN</button>
		{/if}
		<div class="content">PYMBLE PIONEER</div>
	</div>
	
	<div class="grid-container">
		<div class="sectionHeader variable-buffer" style:--height={screenWidth <= 500 && $ScoutingPage !== HomePage ?  "7rem" : "5rem"} ></div>
		<slot></slot>
		<div class="sectionHeader" style="height: 5rem;"></div>
	</div>
</body>