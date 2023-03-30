<script lang="ts">
	import { matchData } from '../../Utils/stores.js';
    import { onMount, prevent_default } from "svelte/internal";

	const required:boolean = true;

	const regex = new RegExp("^[0-9]*$");

	// enables input validation for these two form inputs, 👍
	onMount(() => {
		document.getElementById("matchNumber")?.addEventListener("beforeinput", (event) => {
			if (event.data != null && !regex.test(event.data)) {
				event.preventDefault();
			}
		});
		document.getElementById("teamNumber")?.addEventListener("beforeinput", (event) => {
			if (event.data != null && !regex.test(event.data)) {
				event.preventDefault();
			}
		});
	});

</script>

<style>

</style>

<div style="display: contents;">
	<h2 class="sectionHeader">PRE MATCH INFORMATION</h2>

	<label for="">SCOUT NAME: </label>
	<input {required} inputmode="text" placeholder="SCOUT NAME" bind:value={$matchData[0]} />

	<label for="">MATCH #: </label>
	<input id="matchNumber" {required} inputmode="numeric" placeholder="MATCH NUMBER" bind:value={$matchData[1]} />

	<label for="">TEAM #: </label>
	<input id="teamNumber" {required} inputmode="numeric" placeholder="TEAM NUMBER" bind:value={$matchData[2]} />

	<!-- <label for="">DOWNLOAD AUTOMATICALLY</label>
	<input {required} type="checkbox" /> -->
</div>