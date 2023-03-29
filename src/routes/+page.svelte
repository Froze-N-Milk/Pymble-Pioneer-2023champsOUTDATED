<script lang="ts">
	import ScoreCounter from "./scoreCounter.svelte";
	// import { onMount } from "svelte";


	// onMount(() => {
	// 	const highCones = document.getElementById("highCones");

	// 	let highConeScoreCounter;
	// 	if(highCones != null) {
	// 		highConeScoreCounter = new ScoreCounter({
	// 			target: highCones,
	// 			props: {
	// 				count: 0
	// 			}
	// 		});
	// 	}

	// 	const middleCones = document.getElementById("middleCones");

	// 	let middleConeScoreCounter;
	// 	if(middleCones != null) {
	// 		middleConeScoreCounter = new ScoreCounter({
	// 			target: middleCones,
	// 			props: {
	// 				count: 0
	// 			}
	// 		});
	// 	}
	// });
	
	let middleConeCount: number;
</script>

<style>
	body {
		width: 1fr;
		height: 1fr;
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
		padding: 1rem;
		vertical-align: auto;
	}

	form input {
		width: 12rem;
		grid-column: 2/3;
		border: 0px;
  		outline: 1px solid #151513;
		background: #20201D;
		color: snow;
		padding: 1rem;
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
	}
</style>


<body>
	<div>
		<h1>
			PYMBLE PIONEER
		</h1>

		<form class="gridForm column">
			<p class="sectionHeader">MATCH DATA</p>

			<label for="">MATCH NUMBER: </label>
			<input placeholder="MATCH NUMBER"/>

			<label for="">TEAM NUMBER: </label>
			<input placeholder="TEAM NUMBER"/>

			<p class="sectionHeader">TELEOP</p>

			<label for="">HIGH CONES: </label>
			<!-- <div class="placeholder" id="highCones"></div> -->
			<ScoreCounter count={0} />

			<label for="">MIDDLE CONES: </label>
			<!-- <div class="placeholder" id="middleCones"></div> -->
			<ScoreCounter count={0} />
		</form>

	</div>

	<div class="navbar">
		<p>version a0.5</p>
	</div>
</body>