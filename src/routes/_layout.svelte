<script context="module">
	import embed_styles from '../utils/_embed_styles.js';
	import Typography from 'typography'

	const typography = new Typography({
		baseFontSize: '18px',
		baseLineHeight: 1.666,
	});

	export function preload({ params, query }) {
		return this.fetch(`global.css`).then(r => r.text())
			.then(styles => ({
				typographyStyles: embed_styles(typography.toString()),
				globalStyles: embed_styles(styles),
			}));
	}
</script>

<script>
	export let globalStyles;
	export let typographyStyles;
</script>

{@html typographyStyles}
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