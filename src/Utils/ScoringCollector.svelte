<script lang="ts">
    import ScoreCounter from "./ScoreCounter.svelte";
</script>

<p class="sectionHeader">CONES:</p>

<label for="">HIGH CONES: </label>
<ScoreCounter count={0} />

<label for="">MIDDLE CONES: </label>
<ScoreCounter count={0} />

<label for="">LOW CONES: </label>
<ScoreCounter count={0} />

<p class="sectionHeader">CUBES:</p>

<label for="">HIGH CUBES: </label>
<ScoreCounter count={0} />

<label for="">MIDDLE CUBES: </label>
<ScoreCounter count={0} />

<label for="">LOW CUBES: </label>
<ScoreCounter count={0} />