<script lang="ts">
	import { QRCode } from "@bonosoft/sveltekit-qrcode";
    import { beforeUpdate, onMount } from "svelte";
    import { matchData, pageIndex } from "../../Utils/stores";

	const csv = true;

	let content = "placeholder";

	let href: string;

	let downloadname: string;

	$:submit();

	function submit() {
		if($matchData[1] === undefined) {
			$matchData[1] = 0;
		}
		if($matchData[2] === undefined) {
			$matchData[2] = 0;
		}

		console.log("working!");
		let urlContent;
		if(csv) {
			
			let csv = "";
			$matchData.forEach(column => {
				csv += column + ",";
			});
			
			urlContent = encodeURI("data:text/csv;charset=utf-8," + csv);
			content = csv;
			href = encodeURI(urlContent);
			downloadname = "match" + $matchData[1] + "team" + $matchData[2] + "by" + $matchData[0] + ".csv";
		}
		else {
			
			urlContent = "data:text/json;charset=utf-8," + JSON.stringify($matchData);
			content = JSON.stringify($matchData);
			href = encodeURI(urlContent);
			downloadname = "match" + $matchData[1] + "team" + $matchData[2] + "by" + $matchData[0] + ".json";
		}

	}

	function reset() {
		$matchData = [
			//prematch 0-2
			$matchData[0],
			,
			,
			//auto 3-9
			0,
			0,
			0,
			0,
			0,
			0,
			//teleop 10-15
			0,
			0,
			0,
			0,
			0,
			0
		];
		$pageIndex = 0;
	}

	export function downloadFile(node: HTMLAnchorElement) {
		node.click();
	}	
</script>

<style>
	button {
		padding: none;
		height: calc(3rem + 2px);
		border: none;
		outline: 1px solid #151513;
		background: #20201D;
		color: snow;
		margin: none;
		aspect-ratio: 5/1;
	}

	a {
		text-decoration: none;
		color: snow;
	}

	.buttonLookAlike {
		grid-column: 1/3;
		outline: 1px solid #151513;
		background: #20201D;
		color: snow;
		margin: none;
		height: calc(3rem + 2px);
		aspect-ratio: 5/1;
		align-items: center;
		margin-left: calc(50% - 7.5rem - 5px);
		text-align: center;
		font-family: "Roboto";
	}

	.qrcodewrapper {
		width: 35rem;
		aspect-ratio: 1/1;
		margin-left: calc(50% - 18.5rem);
	}
</style>

<h2 class="sectionHeader">
	SUBMISSION
</h2>


<div class="sectionHeader qrcodewrapper">
	<QRCode {content} errorCorrection="H" responsive="true" bgcolor="#151513" color="snow" padding="0"></QRCode>
</div>
<a class="buttonLookAlike" id="downloader" {href} download={downloadname} target="_blank" use:downloadFile>
	<p style="padding-top: 1px;">DOWNLOAD</p>
</a>
<div class="sectionHeader" on:click={reset} on:keypress={reset}>
	<button>
		NEW MATCH
	</button>
</div>
