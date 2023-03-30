<style>
	body {
		width: 1fr;
		height: 1fr;
		text-align: center;
		font-family: "Roboto";
		color: snow;
		background-color: #151513;
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
		padding: 1rem;
		vertical-align: auto;
	}

	:global(form input) {
		width: 12rem;
		grid-column: 2/3;
		border: 0px;
  		outline: 1px solid #151513;
		background: #20201D;
		color: snow;
		padding: 1rem;
		text-align: center;
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

	:global(button) {
		padding: none;
		height: calc(3rem + 2px);
		border: none;
		outline: 1px solid #20201D;
		background: #151513;
		color: snow;
		margin: none;
		aspect-ratio: 3/1;
	}

	:global(button:disabled) {
		background: #20201D;
		color: rgba(255, 250, 250, 0.341);
	}

	:global(.padded) {
		padding-top: none;
		padding-bottom: none;
		padding-left: 3rem;
		padding-right: 3rem;
	}
</style>

<body>
	<div class="titlebar">
		<h1 class="padded">PYMBLE PIONEER</h1>
	</div>
		
	<slot></slot>
</body>