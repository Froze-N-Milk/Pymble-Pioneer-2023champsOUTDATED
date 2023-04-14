<script lang="ts">
	import ScoreCounter from "./ScoreCounter.svelte";
    import type { MatchDataEntry } from "./stores";
    import { SelectedMatchDataEntry } from "./stores.js";

    export let data: (keyof MatchDataEntry)[];

    let cubeColour = "#cb9cf2";
    let coneColour = "#ffc857";

</script>

<label for="" class="left-column">HIGH CONES:</label>
<ScoreCounter bind:count={$SelectedMatchDataEntry[data[0]]} borderColour={coneColour} backgroundColourHover={coneColour} hoverTextColour={"#151513"}/>

<label for="" class="left-column">HIGH CUBES:</label>
<ScoreCounter bind:count={$SelectedMatchDataEntry[data[3]]} borderColour={cubeColour} backgroundColourHover={cubeColour} />

<div class="sectionHeader"></div>

<label for="" class="left-column">MIDDLE CONES:</label>
<ScoreCounter bind:count={$SelectedMatchDataEntry[data[1]]} borderColour={coneColour} backgroundColourHover={coneColour} hoverTextColour={"#151513"}/>

<label for="" class="left-column">MIDDLE CUBES:</label>
<ScoreCounter bind:count={$SelectedMatchDataEntry[data[4]]} borderColour={cubeColour} backgroundColourHover={cubeColour} />

<div class="sectionHeader"></div>

<label for="" class="left-column">LOW CONES:</label>
<ScoreCounter bind:count={$SelectedMatchDataEntry[data[2]]} borderColour={coneColour} backgroundColourHover={coneColour} hoverTextColour={"#151513"}/>

<label for="" class="left-column">LOW CUBES:</label>
<ScoreCounter bind:count={$SelectedMatchDataEntry[data[5]]} borderColour={cubeColour} backgroundColourHover={cubeColour} />