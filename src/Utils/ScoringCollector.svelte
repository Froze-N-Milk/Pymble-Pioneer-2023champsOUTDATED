<script lang="ts">
    import ScoreCounter from "./ScoreCounter.svelte";

    export let data = [0, 0, 0, 0, 0, 0];
</script>

<p class="sectionHeader">CONES:</p>

<label for="">HIGH CONES: </label>
<ScoreCounter bind:count={data[0]} />

<label for="">MIDDLE CONES: </label>
<ScoreCounter bind:count={data[1]} />

<label for="">LOW CONES: </label>
<ScoreCounter bind:count={data[2]} />

<p class="sectionHeader">CUBES:</p>

<label for="">HIGH CUBES: </label>
<ScoreCounter bind:count={data[3]} />

<label for="">MIDDLE CUBES: </label>
<ScoreCounter bind:count={data[4]} />

<label for="">LOW CUBES: </label>
<ScoreCounter bind:count={data[5]} />