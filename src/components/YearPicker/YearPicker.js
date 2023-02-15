import React, { useMemo, useState } from 'react';
import selectDate from '../../shared/selectDate';
import toLocaleDigits from '../../shared/toLocaleDigits';
import getRangeHoverClass from '../../shared/getRangeHoverClass';
import DateObject from 'react-date-object';

export default function YearPicker({
	state,
	onChange,
	sort,
	handleFocusedDate,
	onYearChange,
	rangeHover,
}) {
	const { date, today, minDate, maxDate, onlyYearPicker, range, onlyShowInRangeDates, year } =
			state,
		mustShowYearPicker = state.mustShowYearPicker || onlyYearPicker,
		digits = date.digits,
		[yearHovered, setyearHovered] = useState();

	let minYear = today.year - 4;

	minYear = minYear - 12 * Math.ceil((minYear - year) / 12);

	const years = useMemo(() => {
		let years = [],
			year = minYear;

		for (var i = 0; i < 4; i++) {
			let array = [];

			for (var j = 0; j < 3; j++) {
				array.push(year);
				year++;
			}

			years.push(array);
		}

		return years;
	}, [minYear]);

	return (
		<div
			className={`${onlyYearPicker ? 'only ' : ''}rmdp-year-picker gap-5 grid grid-cols-3 grid-rows-2 absolute top-0 w-1/2 h-auto border-2 justify-around rounded-md items-center  ${
				mustShowYearPicker ? 'block' : 'hidden'
			}`}
			// style={{ display: mustShowYearPicker ? 'block' : 'none' }}
		>
			{years.map((array, i) => (
				<div
					key={i}
					className='rmdp-ym flex h-1/4 justify-between'
					onMouseLeave={() => rangeHover && setyearHovered()}>
					{array.map((year, j) => (
						<div
							key={j}
							className={getClassName(year)}
							onClick={() => selectYear(year)}
							onMouseEnter={() => rangeHover && setyearHovered(year)}>
							<span className={onlyYearPicker ? 'sd' : ''}>
								{toLocaleDigits(year.toString(), digits)}
							</span>
						</div>
					))}
				</div>
			))}
		</div>
	);

	function selectYear(year) {
		if (notInRange(year)) return;

		let date = new DateObject(state.date).setYear(year),
			{ selectedDate, focused } = state;

		if (onlyYearPicker) {
			[selectedDate, focused] = selectDate(date, sort, state);
		} else {
			if (minDate && date.monthIndex < minDate.monthIndex) {
				date = date.setMonth(minDate.monthIndex + 1);
			} else if (maxDate && date.monthIndex > maxDate.monthIndex) {
				date = date.setMonth(maxDate.monthIndex + 1);
			}

			onYearChange?.(date);
		}

		onChange(onlyYearPicker ? selectedDate : undefined, {
			...state,
			date,
			focused,
			selectedDate,
			mustShowYearPicker: false,
		});

		if (onlyYearPicker) handleFocusedDate(focused, date);
	}

	function getClassName(year) {
		let names = ['rmdp-day'],
			{ date, selectedDate } = state;

		if (notInRange(year)) names.push('rmdp-disabled text-disable');

		// if (names.includes('rmdp-disabled text-gray-400') && onlyShowInRangeDates) return;
		if (names.includes('rmdp-disabled text-disable line-through') && onlyShowInRangeDates) return;

		if (today.year === year) names.push('rmdp-today text-primary');

		if (!onlyYearPicker) {
			if (year === date.year) names.push('rmdp-selected bg-primary text-white rounded-md');
		} else {
			if (!range) {
				if ([].concat(selectedDate).some((date) => date && date.year === year))
					names.push('rmdp-selected bg-primary text-white rounded-md');
			} else {
				let first = selectedDate[0],
					second = selectedDate[1];

				if (selectedDate.length === 1) {
					if (year === first.year) names.push('rmdp-range');

					if (rangeHover) {
						const selectedYear = selectedDate[0].year;

						if (
							(year > selectedYear && year <= yearHovered) ||
							(year < selectedYear && year >= yearHovered)
						) {
							names.push('rmdp-range-hover ');

							if (year === yearHovered) {
								names.push(yearHovered > selectedYear ? 'end' : 'start');
							}
						}
					}
				} else if (selectedDate.length === 2) {
					if (year >= first.year && year <= second.year) names.push('rmdp-range');
					if (year === first.year) names.push('start');
					if (year === second.year) names.push('end');
				}
			}
		}

		return names.join(' ');
	}

	function notInRange(year) {
		return (minDate && year < minDate.year) || (maxDate && year > maxDate.year);
	}
}
