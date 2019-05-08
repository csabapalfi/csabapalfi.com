<script context="module">
	import build_style_tag from '../utils/_build_style_tag.js';
	export function preload({ params, query }) {
		return this.fetch(`global.css`).then(r => r.text()).then(styles => {
			return { globalStyles: build_style_tag(styles) };
		});
	}
</script>

<script>
	export let globalStyles;
</script>

{@html globalStyles}

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<main>
	<slot></slot>
</main>