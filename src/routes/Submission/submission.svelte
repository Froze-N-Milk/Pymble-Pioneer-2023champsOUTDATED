<script lang="ts">
	import { downloadToggle, fileType, autoParkOption, teleopParkOption } from './../../Utils/stores.js';
	import { QRCode } from "@bonosoft/sveltekit-qrcode";
    import { matchData, pageIndex } from "../../Utils/stores";

	let content = "placeholder";

	let href: string;

	let downloadname: string;

	$:submit();

	function submit() {
		$matchData[1] = Number($matchData[1]);
		$matchData[2] = Number($matchData[2]);

		$matchData[9] = $autoParkOption === "ENGAGED" ? 1 : 0;
		$matchData[10] = $autoParkOption === "DOCKED" ? 1 : 0;
		$matchData[11] = $autoParkOption === "MOBILITY" ? 1 : 0;

		$matchData[24] = $teleopParkOption === "ENGAGED" ? 1 : 0;
		$matchData[25] = $teleopParkOption === "DOCKED" ? 1 : 0;
		$matchData[26] = $teleopParkOption === "PARKED" ? 1 : 0;

		let cyclesSum = 0;
		$matchData.slice(3, 9).concat($matchData.slice(12, 18)).forEach(value => {
			cyclesSum += Number(value);
		}); 
		$matchData[29] = cyclesSum;

		let urlContent;
		if($fileType) {
			
			let csv = "";
			$matchData.forEach(column => {
				csv += column + ",";
			});
			
			urlContent = "data:text/csv;charset=utf-8," + csv;
			content = csv;
			href = urlContent;
			downloadname = "match" + $matchData[1] + "team" + $matchData[2] + "by" + $matchData[0] + ".csv";
		}
		else {
			
			urlContent = "data:text/json;charset=utf-8," + JSON.stringify($matchData);
			content = JSON.stringify($matchData);
			href = urlContent;
			downloadname = "match" + $matchData[1] + "team" + $matchData[2] + "by" + $matchData[0] + ".json";
		}

	}

	function reset() {
		$matchData = [
			,//team number [0]
			,//match number [1]

			//auto:

			//scoring:
			//cones:
			0,//top [3]
			0,//mid [4]
			0,//low [5]
			//cubes:
			0,//top [6]
			0,//mid [7]
			0,//low [8]
			
			//parking: (calculated at the end, 1/0 for true/false)
			0,//engaged [9]
			0,//docked [10]
			0,//mobility [11]

			//teleop:

			//scoring:
			//cones:
			0,//top [12]
			0,//mid [13]
			0,//low [14]
			//cubes:
			0,//top [15]
			0,//mid [16]
			0,//low [17]

			//collecting:
			//double:
			0,//cones [18]
			0,//cubes [19]
			//single
			0,//cones [20]
			0,//cubes [21]
			//floor
			0,//cones [22]
			0,//cubes [23]

			//parking: (calculated at the end, 1/0 for true/false)
			0,//engaged [24]
			0,//docked [25]
			0,//parked [26]

			//fouls:
			0,//fouls [27]
			0,//tech fouls [28]

			0,//cycles (calculated at the end) [29]

			0,//starting position [30]

			"",//scouter's name [31]
			"",//auto comment [32]
			"" //teleop comment[33]
		];

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


<div class="sectionHeader qrcodewrapper">
	<QRCode {content} errorCorrection="H" responsive="true" bgcolor="#151513" color="snow" padding="0"></QRCode>
</div>
<a class="buttonLookAlike" id="downloader" {href} download={downloadname} target="_self" use:downloadFile >
	<div style="padding-top: calc(1rem);">DOWNLOAD</div>
</a>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="buttonLookAlike" on:click={reset}>
	<div style="padding-top: calc(1rem);">NEW MATCH</div>
</div>
