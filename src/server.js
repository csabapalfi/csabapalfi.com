import sirv from 'sirv';
import polka from 'polka';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const app = polka()
	.use(
		 (req, res, next) => {
			// fix server-side fetch (when deployed to now)
			process.env.PORT = req.socket.localPort;
			next();
		},
		sirv('static', { dev }),
		sapper.middleware()
	);

export default app.handler

if (!process.env.NOW_REGION) {
	app.listen(PORT, err => {
		if (err) console.log('error', err)
	})
}