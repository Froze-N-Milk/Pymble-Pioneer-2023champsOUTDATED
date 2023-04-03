<style>
	body {
		text-align: center;
		font-family: "Roboto";
		color: snow;
		background-color: #151513;

	}

	:global(*) {
		font-family: "Roboto";
	}

	:global(form) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 20px;
		row-gap: 4px;
		justify-content: center;
		align-items: center;
	}

	:global(form label) {
		justify-content: right;
		align-items: right;
		text-align: right;
		grid-column: 1/2;
		height: auto;
		vertical-align: auto;
	}

	:global(form input[type=text]) {
		width: 12rem;
		grid-column: 2/3;
		border: 0px;
  		outline: 1px solid #151513;
		background: #20201D;
		color: snow;
		padding: 1rem;
		margin: none;
		text-align: left;
	}

	:global(form input:focus) {
		outline: 2px solid #D62246;
	}

	:global(.sectionHeader) {
		grid-column: 1/3;
		padding: 1rem;
	}

	:global(.navbar) {
		background-color: #20201D;
		overflow: hidden;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		display: inline-flex;
		text-align: center;
		justify-content: center;
		align-items: center;
	}

	.titlebar {
		background-color: #20201D;
		overflow: hidden;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
	}

	:global(.padded) {
		padding-top: none;
		padding-bottom: none;
		padding-left: 3rem;
		padding-right: 3rem;
	}

	:global(.hoverSelfAnnounce:hover) {
		outline: 2px solid #D62246;
		cursor: pointer;
	}

	button {
		padding: none;
		height: 4.7rem;
		border: none;
		background: #151513;
		color: snow;
		margin: none;
		aspect-ratio: 3/1;
		position: fixed;
		left: 0;
		top: 0;
	}

	button:hover {
		background: #D62246;
		cursor: pointer;
	}
</style>

<body>

	<div class="titlebar">
		<a href="/" style="display: contents;">
			<button>RETURN</button>
		</a>

		<h1>PYMBLE PIONEER</h1>
	</div>
	

	<slot></slot>
</body>