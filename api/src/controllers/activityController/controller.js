const { Activity } = require("../../db.js");

const createActivity = async (name, difficulty, duration, season, CountryId) => {
	const newActivity = await Activity.create({
		name,
		difficulty,
		duration,
		season,
	});
	await newActivity.addCountry(CountryId);
  return newActivity;
}

module.exports = {
	createActivity,
}