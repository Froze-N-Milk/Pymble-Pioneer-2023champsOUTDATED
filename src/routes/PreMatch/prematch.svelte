<script lang="ts">
	const required:boolean = false;

	export let data = ["", 0, 0];
</script>

<div style="display: contents;">
	<h2 class="sectionHeader">PRE MATCH INFORMATION</h2>

	<label for="">SCOUT NAME: </label>
	<input {required} inputmode="text" placeholder="SCOUT NAME" bind:value={data[0]} />

	<label for="">MATCH #: </label>
	<input {required} inputmode="numeric" placeholder="MATCH NUMBER" bind:value={data[1]} />

	<label for="">TEAM #: </label>
	<input {required} inputmode="numeric" placeholder="TEAM NUMBER" bind:value={data[2]} />
</div>