import { writable } from "svelte/store";
import type HomePage from "../routes/HomePage.svelte";
import type PitScouting from "../routes/PitScouting/PitScouting.svelte";
import type MatchScouting from "../routes/MatchScouting/MatchScouting.svelte";

export const pageIndex = writable(0);

export type ScoutingPageOptions = 
	HomePage |
	MatchScouting |
	PitScouting;


export const ScoutingPage = writable<typeof HomePage>();

export type MatchDataEntry = {
	teamNumber: number | null;
	matchNumber: number | null;
	//auto
	autoTopCones: number;
	autoMiddleCones: number;
	autoLowCones: number;
	autoTopCubes: number;
	autoMiddleCubes: number;
	autoLowCubes: number;

	autoParking: string;

	//teleop
	teleopTopCones: number;
	teleopMiddleCones: number;
	teleopLowCones: number;
	teleopTopCubes: number;
	teleopMiddleCubes: number;
	teleopLowCubes: number;

	teleopDoubleCones: number;
	teleopSingleCones: number;
	teleopFloorCones: number;
	teleopDoubleCubes: number;
	teleopSingleCubes: number;
	teleopFloorCubes: number;

	teleopParking: string;

	//fouls
	fouls: number;
	techFouls: number;

	//cycles
	cycles: number;

	//other
	startingPosition: number;

	scouterName: string;
	autoComment: string;
	teleopComment: string;
}

export const MatchDataArray = writable<MatchDataEntry[]>([{
	teamNumber: null,
	matchNumber: null,
	//auto
	autoTopCones: 0,
	autoMiddleCones: 0,
	autoLowCones: 0,
	autoTopCubes: 0,
	autoMiddleCubes: 0,
	autoLowCubes: 0,

	autoParking: "",

	//teleop
	teleopTopCones: 0,
	teleopMiddleCones: 0,
	teleopLowCones: 0,
	teleopTopCubes: 0,
	teleopMiddleCubes: 0,
	teleopLowCubes: 0,

	teleopDoubleCones: 0,
	teleopSingleCones: 0,
	teleopFloorCones: 0,
	teleopDoubleCubes: 0,
	teleopSingleCubes: 0,
	teleopFloorCubes: 0,

	teleopParking: "",

	//fouls
	fouls: 0,
	techFouls: 0,

	//cycles
	cycles: 0,

	//other
	startingPosition: 0,

	scouterName: "",
	autoComment: "",
	teleopComment: ""
},])

export const downloadToggle = writable(true);

export const fileType = writable(false);