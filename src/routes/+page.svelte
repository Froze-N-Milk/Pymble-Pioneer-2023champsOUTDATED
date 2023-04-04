<script lang="ts">
    import { ScoutingPage } from "./Utils/stores";
	import HomePage from "./HomePage.svelte";

	$ScoutingPage = HomePage;
</script>

<svelte:component this={$ScoutingPage} />