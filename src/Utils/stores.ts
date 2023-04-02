import { readable, writable } from "svelte/store";

export const pageIndex = writable(0);

// export const matchData = writable([
// 		,//team number [0]
// 		,//match number [1]

// 		//auto:

// 		//scoring:
// 		//cones:
// 		0,//top [3]
// 		0,//mid [4]
// 		0,//low [5]
// 		//cubes:
// 		0,//top [6]
// 		0,//mid [7]
// 		0,//low [8]
		
// 		//parking: (calculated at the end, 1/0 for true/false)
// 		0,//engaged [9]
// 		0,//docked [10]
// 		0,//mobility [11]

// 		//teleop:

// 		//scoring:
// 		//cones:
// 		0,//top [12]
// 		0,//mid [13]
// 		0,//low [14]
// 		//cubes:
// 		0,//top [15]
// 		0,//mid [16]
// 		0,//low [17]

// 		//collecting:
// 		//double:
// 		0,//cones [18]
// 		0,//cubes [19]
// 		//single
// 		0,//cones [20]
// 		0,//cubes [21]
// 		//floor
// 		0,//cones [22]
// 		0,//cubes [23]

// 		//parking: (calculated at the end, 1/0 for true/false)
// 		0,//engaged [24]
// 		0,//docked [25]
// 		0,//parked [26]

// 		//fouls:
// 		0,//fouls [27]
// 		0,//tech fouls [28]

// 		0,//cycles (calculated at the end) [29]

// 		0,//starting position [30]

// 		"",//scouter's name [31]
// 		"",//auto comment [32]
// 		"" //teleop comment[33]
// 	]
// );

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