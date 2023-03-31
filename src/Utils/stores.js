import { writable } from "svelte/store";

export const pageIndex = writable(0);

export const matchData = writable([
		//prematch 0-2
		"",
		,
		,
		//auto 3-9
		0,
		0,
		0,
		0,
		0,
		0,
		//teleop 10-15
		0,
		0,
		0,
		0,
		0,
		0
	]
);

export const downloadToggle = writable(true);
