import DateObject from 'react-date-object';

const getMonths = (date, showOtherDays, numberOfMonths, weekStartDayIndex) => {
	if (!date) return [];

	let months = [];

	for (let monthIndex = 0; monthIndex < numberOfMonths; monthIndex++) {
		date = new DateObject(date).toFirstOfMonth();

		let monthIndex = date.monthIndex,
			weeks = [];

		date.toFirstOfWeek().add(weekStartDayIndex, 'day');

		if (date.monthIndex === monthIndex && date.day > 1) date.subtract(7, 'days');

		for (let weekIndex = 0; weekIndex < 6; weekIndex++) {
			let week = [];

			for (let weekDay = 0; weekDay < 7; weekDay++) {
				week.push({
					date: new DateObject(date),
					day: date.format('D'),
					current: date.monthIndex === monthIndex,
				});

				date.day += 1;
			}

			weeks.push(week);

			if (weekIndex > 2 && date.monthIndex !== monthIndex && !showOtherDays) break;
		}

		months.push(weeks);
	}

	return months;
};

export default getMonths;
