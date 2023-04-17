<script lang="ts">
	let matchDataFiles: FileList;
	let allianceDataFiles: FileList;

	let mergedObjectArray: any[];
	let href: string;
	let downloadname: string;

	async function prepDownload() {
		if(!matchDataFiles) {
			return;
		}

		mergedObjectArray = [];

		for(let i = 0; i < matchDataFiles.length; i++) {
			let JSONobjectArrayMatchData: object[] = Array.from(JSON.parse(await matchDataFiles[i].text()));
			
			JSONobjectArrayMatchData.forEach(element => {
				mergedObjectArray.push(element);
			});
		}

		if(allianceDataFiles){
			for(let i = 0; i < allianceDataFiles.length; i++)  {
				
				let JSONobjectArrayAllianceData: any[] = Array.from(JSON.parse(await allianceDataFiles[i].text()));

				JSONobjectArrayAllianceData.forEach(allianceDataEntry => {

					let filteredforMatchAndTeam;
					for(let j = 0; j < mergedObjectArray.length; j++) {
						if(mergedObjectArray[j].teamNumber === allianceDataEntry.teamNumber && mergedObjectArray[j].matchNumber === allianceDataEntry.matchNumber) {
							filteredforMatchAndTeam = i;
							break;
						}
					}
					
					if(filteredforMatchAndTeam !== null && filteredforMatchAndTeam !== undefined) {
						Object.defineProperties(mergedObjectArray[filteredforMatchAndTeam], {
							defence: {
								value: allianceDataEntry.defence,
								enumerable: true
							},
							rank: {
								value: allianceDataEntry.rank,
								enumerable: true
							}
						});

						mergedObjectArray[filteredforMatchAndTeam].comments = 
							"Match scouting comments:\n"
							+ mergedObjectArray[filteredforMatchAndTeam].comments
							+ "\n\nAlliance scouting comments:\n"
							+ allianceDataEntry.comments;
					}
				
				});
			}
		}

		downloadname = "mergedJSONfiles" + Date.now() + ".json";
		href = "data:text/json;charset=utf-8," + JSON.stringify(mergedObjectArray);
		alert("Merge finished");
	}

</script>

<style>
	.buttonLookAlike {
		padding: none;
		height: calc(3rem + 2px);
		width: 29rem;
		border: none;
		background: #20201D;
		color: snow;
		margin: auto;
		text-decoration: none;
	}

	button {
		padding: none;
		height: calc(3rem + 2px);
		width: 29rem;
		border: none;
		background: #20201D;
		color: snow;
		margin: auto;
		text-decoration: none;
		font-size: 1rem;
	}

	input[type = "file"] {
		border: 0;
		clip: rect(0, 0, 0, 0);
		height: 1px;
		overflow: hidden;
		padding: 0;
		position: absolute !important;
		white-space: nowrap;
		width: 1px;
	}
	.uploader {
		padding-top: calc(1.25rem);
		height: calc(1.75rem + 2px);
		width: calc(14rem);
		border: none;
		background: var(--background);
		color: snow;
		margin: none;
		text-align: center;
	}

	.uploader:hover {
		background: #5386E4;
		cursor: pointer;
	}
</style>

<form on:submit|preventDefault>
	<label for="" class="left-column">MATCH SCOUTING FILES:</label>
	<input type="file" name="match-uploader" multiple id="match-uploader" bind:files={matchDataFiles}>
	<label for="match-uploader" class="uploader" style:--background={matchDataFiles ? "#5386E4" : "#20201D"}> ^ </label>

	<label for="" class="left-column">ALLIANCE SCOUTING FILES:</label>
	<input type="file" name="alliance-uploader" multiple id="alliance-uploader" bind:files={allianceDataFiles}>
	<label for="alliance-uploader" class="uploader" style:--background={allianceDataFiles ? "#5386E4" : "#20201D"}> ^ </label>

	<div class="sectionHeader" style="height: 3rem;"></div>

	<button class="sectionHeader hoverSelfAnnounce" on:click={prepDownload} > MERGE </button>
	<a class="buttonLookAlike sectionHeader hoverSelfAnnounce" id="downloader" {href} download={downloadname} target="_self" >
		<div style="padding-top: calc(1rem + 1px);">DOWNLOAD</div>
	</a>
</form>