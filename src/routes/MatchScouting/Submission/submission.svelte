<script lang="ts">
	import { downloadToggle, fileType, MatchDataArray, pageIndex } from '../../Utils/stores.js';
	import { QRCode } from "@bonosoft/sveltekit-qrcode";

	let content = "";

	let href: string;

	let downloadname: string;

	$:submit();

	function submit() {
		$MatchDataArray[$MatchDataArray.length - 1].teamNumber = Number($MatchDataArray[$MatchDataArray.length - 1].teamNumber);
		$MatchDataArray[$MatchDataArray.length - 1].matchNumber = Number($MatchDataArray[$MatchDataArray.length - 1].matchNumber);

		// old logic for truthy and falsy values for separeate storage of this stuff
		// matchData[9] = $autoParkOption === "ENGAGED" ? 1 : 0;
		// matchData[10] = $autoParkOption === "DOCKED" ? 1 : 0;
		// matchData[11] = $autoParkOption === "MOBILITY" ? 1 : 0;

		// matchData[24] = $teleopParkOption === "ENGAGED" ? 1 : 0;
		// matchData[25] = $teleopParkOption === "DOCKED" ? 1 : 0;
		// matchData[26] = $teleopParkOption === "PARKED" ? 1 : 0;

		// old cylce sum logic
		// matchData.slice(3, 9).concat(matchData.slice(12, 18)).forEach(value => {
		// 	cyclesSum += Number(value);
		// }); 
		$MatchDataArray[$MatchDataArray.length - 1].cycles = 
			$MatchDataArray[$MatchDataArray.length - 1].autoTopCones + $MatchDataArray[$MatchDataArray.length - 1].autoMiddleCones + $MatchDataArray[$MatchDataArray.length - 1].autoLowCones + 
			$MatchDataArray[$MatchDataArray.length - 1].autoTopCubes + $MatchDataArray[$MatchDataArray.length - 1].autoMiddleCubes + $MatchDataArray[$MatchDataArray.length - 1].autoLowCubes + 
			
			$MatchDataArray[$MatchDataArray.length - 1].teleopTopCones + $MatchDataArray[$MatchDataArray.length - 1].teleopMiddleCones + $MatchDataArray[$MatchDataArray.length - 1].teleopLowCones + 
			$MatchDataArray[$MatchDataArray.length - 1].teleopTopCubes + $MatchDataArray[$MatchDataArray.length - 1].teleopMiddleCubes + $MatchDataArray[$MatchDataArray.length - 1].teleopLowCubes;

		let urlContent;

		if($fileType) {
			
			let csv: string = "";

			let keys = Object.keys($MatchDataArray[0]);

			// Build header
			csv += keys.join(",") + "\n";

			// Add the rows
			$MatchDataArray.forEach((obj: any) => {
				csv += keys.map(k => obj[k]).join(",") + "\n";
			});
			
			urlContent = "data:text/csv;charset=utf-8," + csv;
			content = csv;
			href = urlContent;
			downloadname = "Matches" + $MatchDataArray[0].matchNumber + "To" + $MatchDataArray[$MatchDataArray.length - 1].matchNumber + "ScoutedBy" + $MatchDataArray[$MatchDataArray.length - 1].scouterName + ".csv";
		}
		else {
			urlContent = "data:text/json;charset=utf-8," + JSON.stringify($MatchDataArray);
			content = JSON.stringify($MatchDataArray[$MatchDataArray.length - 1]);
			href = urlContent;
			downloadname = "Matches" + $MatchDataArray[0].matchNumber + "To" + $MatchDataArray[$MatchDataArray.length - 1].matchNumber + "ScoutedBy" + $MatchDataArray[$MatchDataArray.length - 1].scouterName + ".json";
		}

	}

	function reset() {
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
			autoComment: "",
			teleopComment: ""
		});
		

		$pageIndex = 0;
	}

	export function downloadFile(node: HTMLAnchorElement) {
		submit();
		if($downloadToggle) {
			node.click();
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
		outline: 1px solid #151513;
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

	.qrcodewrapper {
		width: 22rem;
		max-width: 80%;
		aspect-ratio: 1/1;
		/* margin-left: calc(50% - 18.5rem); */
		margin: auto;
	}
</style>

<h2 class="sectionHeader">
	SUBMISSION
</h2>

{#if content.length < 3000}
	<div class="sectionHeader qrcodewrapper">
		<QRCode {content} errorCorrection="L" responsive="true" bgcolor="#151513" color="snow" padding="0"></QRCode>
	</div>
{/if}
<a class="buttonLookAlike" id="downloader" {href} download={downloadname} target="_self" use:downloadFile >
	<div style="padding-top: calc(1rem);">DOWNLOAD</div>
</a>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="buttonLookAlike" on:click={reset}>
	<div style="padding-top: calc(1rem);">NEW MATCH</div>
</div>
