const matches = require("../data/friends.js");

module.exports = (app) => {

	app.get("/api/matches", (req, res) => {

		res.json(matches);

	});

	app.post("/api/matches", (req, res) => {

		let topMatch = {

			name: "",
			pic: "",
			matchVar: 1000

		};

		let user = req.body;
		let userRatings = user.scores
		let matchDif = 0;

		for(var i = 0; i < matches.length; i++) {

			console.log(matches[i]);

			matchDif = 0;

			for(var j = 0; j < matches[i].scores[j]; j++) {

				matchDif += Math.abs(parseInt(userRatings) - parseInt(matches[i].scores[j]));

				if(matchDif <= topMatch.matchVar) {

					topMatch.name = matches[i].name;
					topMatch.pic = matches[i].photo;
					topMatch.matchVar = matchDif;

				};

			};

		};

		matches.push(user);
		res.json(topMatch);

	});

};