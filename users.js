// users.js

const faker = require('faker');

function generateUsers() {
	const users = [];

	for (let id = 0; id < 50; id++) {
		const firstName = faker.name.firstName();
		const lastName = faker.name.lastName();
		const email = faker.internet.email();

		users.push({
			id,
			first_name: firstName,
			last_name: lastName,
			email,
		});
	}

	return { users };
}

module.exports = generateUsers;
