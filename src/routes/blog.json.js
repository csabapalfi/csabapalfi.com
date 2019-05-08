import posts from './_posts.js';

const contents = JSON.stringify(
	posts()
		.filter(({metadata: {draft}}) => !draft)
		.map(({slug, metadata: {title}}) => 
			({slug, title})
		)
);

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}