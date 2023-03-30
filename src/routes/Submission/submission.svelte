<script lang="ts">
	import { pageIndex } from './../../Utils/stores.js';
	import { QRCode } from "@bonosoft/sveltekit-qrcode";
    import { onMount } from "svelte";
    import { matchData } from "../../Utils/stores";

	const csv = true;

	let content = "";

	let submitted = false;

	let downloader: HTMLElement | null;

	let href: string;

	let downloadname: string;

	onMount(() => {
		downloader = document.getElementById("downloader");
	});

	function submit() {
		let urlContent;
		if(csv) {
			
			let csv = "";
			$matchData.forEach(column => {
				csv += column + ",";
			});
			
			urlContent = "data:text/csv;charset=utf-8," + csv;
			content = csv;
			if (downloader) {
				href = encodeURI(urlContent);
				downloadname = "match" + $matchData[1] + "team" + $matchData[2] + "by" + $matchData[0] + ".csv";
				downloader.click();
			}
		}
		else {
			
			urlContent = "data:text/json;charset=utf-8," + JSON.stringify($matchData);
			content = JSON.stringify($matchData);
			if (downloader) {
				href = encodeURI(urlContent);
				downloadname = "match" + $matchData[1] + "team" + $matchData[2] + "by" + $matchData[0] + ".json";
				downloader.click();
			}
		}

		submitted = true;
	}

	function reset() {
		$matchData = [
			//prematch 0-2
			$matchData[0],
			0,
			0,
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
</style>

<h2 class="sectionHeader">
	SUBMISSION
</h2>

{#if !submitted}
	<div class="sectionHeader" on:click={submit} on:keypress={submit}>
		<button>
			SUBMIT && GENERATE
		</button>
	</div>
{:else}
	<div class="sectionHeader">
		<QRCode {content}></QRCode>
	</div>
	<div class="sectionHeader" on:click={reset} on:keypress={reset}>
		<button>
			NEW MATCH
		</button>
	</div>
{/if}
<a id="downloader" {href} download={downloadname} target="_blank">linkers</a>
