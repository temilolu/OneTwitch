// users.js

const faker = require('faker');

function generateGames() {
	const games = [];

	for (let id = 0; id < 50; id++) {
		const gameName = faker.commerce.productName();
		const gameImage = faker.image.avatar();

		games.push({
			id,
			game_name: gameName,
			game_img: gameImage,
		});
	}

	return { games };
}

module.exports = generateGames;
