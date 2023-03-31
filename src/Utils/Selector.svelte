<script lang="ts">
	export let options: any[];
</script>

<style>
	.buttonLookAlike {
		grid-column: 2/3;
		outline: 1px solid #151513;
		background: #20201D;
		color: snow;
		align-items: left;
		margin: none;
		text-align: left;
		padding-left: 1rem;
		padding-right: 1rem;
		overflow: hidden;
		border: none;
		height: calc(3rem + 2px);
		width: calc(14rem + 4px);
	}

	.hoverSelfAnnounce:hover {
		outline: 2px solid #D62246;
	}
</style>

<select class="buttonLookAlike hoverSelfAnnounce">
	{#each options as option}
		<option value={option}>
			{option}
		</option>
	{/each}
</select>