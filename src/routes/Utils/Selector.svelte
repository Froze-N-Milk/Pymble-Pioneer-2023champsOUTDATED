<script lang="ts">
	export let options: any[];
	export let value: any;
</script>

<style>
	.buttonLookAlike {
		outline: 1px solid #151513;
		background: #20201D;
		color: snow;
		margin: none;
		text-align: left;
		padding-left: 1rem;
		padding-right: 1rem;
		overflow: hidden;
		border: none;
		height: calc(3rem + 2px);
		max-width: 14rem;
	}
</style>

<select class="buttonLookAlike hoverSelfAnnounce" bind:value={value}>
	{#each options as option}
		<option value={option}>
			{option}
		</option>
	{/each}
</select>