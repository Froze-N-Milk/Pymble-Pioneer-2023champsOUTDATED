import { writable } from "svelte/store";
import type HomePage from "../HomePage.svelte";
import type PitScouting from "../PitScouting/PitScouting.svelte";
import type MatchScouting from "../MatchScouting/MatchScouting.svelte";
import type AllianceScouting from "../AllianceScouting/AllianceScouting.svelte";
import type MergersAndAquisitions from "../Mergers&&Aquisitions/MergersAndAquisitions.svelte";

export const pageIndex = writable(0);

export type ScoutingPageOptions = 
	typeof HomePage |
	typeof MatchScouting |
	typeof PitScouting |
	typeof AllianceScouting |
	typeof MergersAndAquisitions;

export const ScoutingPage = writable<ScoutingPageOptions>();

export type MatchDataEntry = {
	teamNumber: number | string;
	matchNumber: number | string;
	//auto
	autoTopCones: number;
	autoMiddleCones: number;
	autoLowCones: number;
	autoTopCubes: number;
	autoMiddleCubes: number;
	autoLowCubes: number;

	autoEngageAttempt: boolean;
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

	teleopEngageAttempt: boolean;
	teleopParking: string;

	//fouls
	fouls: number;
	techFouls: number;

	//cycles
	cycles: number;

	//other
	startingPosition: number;

	scouterName: string;
	comments: string;
};

export const selectedIndex = writable<number>(0);

export const matchDataArrayIndexes = writable<number[]>([0]);

export const MatchDataArray = writable<MatchDataEntry[]>([{
	teamNumber: "",
	matchNumber: "",
	//auto
	autoTopCones: 0,
	autoMiddleCones: 0,
	autoLowCones: 0,
	autoTopCubes: 0,
	autoMiddleCubes: 0,
	autoLowCubes: 0,

	autoEngageAttempt: false,
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

	teleopEngageAttempt: false,
	teleopParking: "",

	//fouls
	fouls: 0,
	techFouls: 0,

	//cycles
	cycles: 0,

	//other
	startingPosition: 0,

	scouterName: "",
	comments: ""
},])

export const SelectedMatchDataEntry = writable<MatchDataEntry>();

export const downloadToggle = writable(true);

export const fileType = writable(false);

export type PitScoutingEntry = {
	teamNumber: number | string;
	scouterName: string;
	driveTrainType: string;
	driveTrainSizeWidth: number | string;
	driveTrainSizeLength: number | string;
	robotWeight: number | string;
	autoPaths: string;
	comments: string;
}

export const PitScoutingArray = writable<PitScoutingEntry[]>([{
	teamNumber: "",
	scouterName: "",
	driveTrainType: "",
	driveTrainSizeWidth: "",
	driveTrainSizeLength: "",
	robotWeight: "",
	autoPaths: "",
	comments: ""
}])

export const PitScoutingPhotosTaken = writable<boolean[]>([
	false
])

export type AllianceScoutingEntry = {
	matchNumber: number | string;
	teamRank1: number | string;
	defence1: boolean;
	comments1: string;
	teamRank2: number | string;
	defence2: boolean;
	comments2: string;
	teamRank3: number | string;
	defence3: boolean;
	comments3: string;
}

export const AllianceScoutingArray = writable<AllianceScoutingEntry[]>([{
	matchNumber: "",
	teamRank1: "",
	defence1: false,
	comments1: "",
	teamRank2: "",
	defence2: false,
	comments2: "",
	teamRank3: "",
	defence3: false,
	comments3: ""
}])