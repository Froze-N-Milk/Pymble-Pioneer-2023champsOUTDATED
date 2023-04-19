<script lang="ts">
	import { selectedIndex } from '../../Utils/stores.js';
	import { downloadToggle, fileType, MatchDataArray, pageIndex, SelectedMatchDataEntry } from '../../Utils/stores.js';
	import { QRCode } from "@bonosoft/sveltekit-qrcode";

	let content = "";

	let href: string;

	let downloadname: string;

	$:prepDownload();

	let validDownload: boolean;

	function prepDownload() {
		validDownload = true;
		$MatchDataArray.forEach(match => {

			let validMatch = (match.teamNumber !== "" && match.matchNumber !== "" && match.scouterName !== "" && match.startingPosition !== 0);
			console.log(match.matchNumber + "match" + validMatch.toString());
			validDownload = validDownload && validMatch;
			console.log(match.matchNumber + "download" + validDownload.toString());

			if(!validMatch) {
				if(confirm("Issue found with match number " + match.matchNumber + "\nThe team number is: " + match.teamNumber + "\nThe scouter's name is: " + match.scouterName + "\nThe starting position (should NOT be 0) is: " + match.startingPosition + "\nPress OK to delete this match (if you have just imported this file to change an older match and then redownloaded, you may need to delete an extra match that was automatically added)\nPress cancel to continue editing the matchData")) {
					$MatchDataArray.splice($MatchDataArray.indexOf(match), 1);
				}
				else {
					$pageIndex = 0;
					$selectedIndex = $MatchDataArray.indexOf(match);
				}
			}

		});

		$MatchDataArray.forEach(array => {
			array.teamNumber = Number(array.teamNumber);
			array.matchNumber = Number(array.matchNumber);

			array.cycles = array.autoTopCones + array.autoMiddleCones + array.autoLowCones + array.autoTopCubes + array.autoMiddleCubes + array.autoLowCubes + 
				array.teleopTopCones + array.teleopMiddleCones + array.teleopLowCones + array.teleopTopCubes + array.teleopMiddleCubes + array.teleopLowCubes;

			
		});

		let urlContent;

		if(validDownload) {
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

	}

	export function newMatch() {
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
		

		$pageIndex = 0;

		$selectedIndex = $MatchDataArray.length - 1;

	}

	function downloadFile(link: HTMLAnchorElement) {
		prepDownload();
		if($downloadToggle && validDownload) {
			link.click();
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
		border: none;
	}

	.qrcodewrapper {
		width: 22rem;
		max-width: 80%;
		aspect-ratio: 1/1;
		/* margin-left: calc(50% - 18.5rem); */
		margin: auto;
	}

	.error {
		color: red;
	}
</style>

{#if validDownload}
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
	<div class="buttonLookAlike" on:click={newMatch}>
		<div style="padding-top: calc(1rem);">NEW MATCH</div>
	</div>
{:else}
	<h2 class="sectionHeader error">
		DOWNLOAD ERROR
	</h2>
	<button on:click={() => prepDownload()} class="buttonLookAlike sectionHeader hoverSelfAnnounce">RETRY</button>
{/if}