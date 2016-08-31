let request = require('request');

function logger(req, res, next) {
	let body = Object.assign({time: Date.now()}, req.body || {});

	req.pipe(request.post('https://technofront-f958d.firebaseio.com/students.json', { form: JSON.stringify(body) }, () => {
		next();
	}));
};

module.exports = logger;
