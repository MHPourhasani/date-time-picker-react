import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
// import Datepicker from 'react-tailwindcss-datepicker';
import moment from 'jalali-moment';
// import { DatePicker } from 'react-dater';
// import Datetime from 'react-datetime';

import { format } from 'date-fns';
// import { DayPicker } from 'react-day-picker';

// import { Calendar } from 'react-multi-date-picker';
// import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import weekends from 'react-multi-date-picker/plugins/highlight_weekends';

// import { DatePicker } from '@julienvanbeveren/react-datetime-picker';

import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// import { Calendar, utils } from 'react-modern-calendar-datepicker';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// import DatePicker from 'react-modern-calendar-datepicker';
// import Format from './components/Date Picker/DatePicker';
import Buttons from 'react-multi-date-picker/components/button';
import InputIcon from 'react-multi-date-picker/components/input_icon';
import { useRef } from 'react';
import DatePicker from './components/DatePicker/DatePicker';
import Calendar from './components/Calendar/Calendar';

const App = () => {
	const [value, setValue] = useState({
		startDate: new Date(),
		endDate: new Date(),
	});
	const datePickerRef = useRef();

	const handleValueChange = (newValue) => {
		console.log('newValue:', newValue);

		// moment(newValue, 'YYYY-M-D').locale('fa').format('YYYY/M/D');
		setValue(newValue);
	};

	const [dates, setDates] = useState({
		startDate: new Date(),
		endDate: new Date(),
	});

	const [open, setOpen] = useState(false);

	// const defaultRange = {
	// 	from: new Date().getDay(),
	// 	to: new Date().getDate(),
	// };
	// const [selectedDayRange, setSelectedDayRange] = useState({
	// 	from: new Date(),
	// 	to: null,
	// });

	const [selectedDayRange, setSelectedDayRange] = useState({
		from: null,
		to: null,
	});

	return (
		<div className='flex w-full flex-col items-center justify-center'>
			{/* <Datepicker
				startWeekOn='sat'
				i18n={'fa'}
				// value={moment(value, 'YYYY-M-D').locale('fa').format('YYYY/M/D')}
				primaryColor={'blue'}
				value={value}
				onChange={handleValueChange}
				displayFormat={'YYYY/MM/DD'}
				maxDate={new Date()}
				containerClassName='m-16 w-80'
			/> */}

			{/* {ara} */}
			{/* {Object.values(value).map((post, key) => (
				<div key={key} className='post-detail'>
					<h1>{post.title}</h1>
					<p>{moment(post.date, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}</p>
					<hr />
				</div>
			))}


			{/* <DatePicker dates={dates} setDates={setDates} open={open} setOpen={setOpen}>
				<button onClick={() => setOpen(!open)}>
					{dates.startDate && dates.startDate.toDateString()} |{' '}
					{dates.endDate && dates.endDate.toDateString()}
				</button>
			</DatePicker> */}

			{/* <DayPicker
				mode='multiple'
				captionLayout='dropdown'
				selected={new Date()}
				// numberOfMonths={2}
				modifiersClassNames={{
					selected: 'my-selected',
					today: 'text-sky-500',
				}}
				classNames='text-red-500'
			/> */}

			{/* <Datetime className='' locale="fa "/> */}

			{/* <Calendar
				value={selectedDayRange}
				onChange={setSelectedDayRange}
				inputClassName='my-custom-input'
				maximumDate={utils('fa').getToday()}
				// colorPrimary='text-primary'
				calendarTodayClassName='text-pink-500'
				calendarClassName='font-iranyekan'
				calendarRangeBetweenClassName='text-primary'
				// calendarTodayClassName='#203A43'
				colorPrimaryLight='#2C5364'
				locale='fa'
				shouldHighlightWeekends
			/> */}

			{/* <button onClick={() => datePickerRef.current.openCalendar()}>open</button> */}

			{/* <button style={{ margin: '5px' }} onClick={() => datePickerRef.current.closeCalendar()}>
				close
			</button> */}

			{/* <DatePicker
				value={value}
				onChange={setValue}
				range
				rangeHover
				ref={datePickerRef}
				render={<InputIcon />}
				numberOfMonths={2}
				showOtherDays
				maxDate={new Date()}
				className='font-iranyekan font-light text-3 w-80 text-pink-500'
				plugins={[weekends()]}
				calendar={persian}
				locale={persian_fa}
				containerStyle={{ width: '100vw', height:'10rem' }}
				style={{
					width: '100%',
					height: '26px',
					boxSizing: 'border-box',
					fontSize: '1rem',
					color: '#fff',
				}}
				mapDays={({ date, today, selectedDate, currentMonth, isSameDate }) => {
					let props = {};

					props.style = {
						width:'12px',
						height:'12px',
						borderRadius: '5px',
						fontSize: '1rem',
						padding:'20px',
						display:'flex',
						justifyContent:'center',
						alignItems:'center',
						gap:'20px',
						color: date.month.index === currentMonth.index ? '#000' : '',
					};

					if (isSameDate(date, today)) props.style.color = 'text-green-500';
					if (isSameDate(date, selectedDate))
						props.style = {
							...props.style,
							color: '#fff',
							backgroundColor: '#2991FF',
							fontWeight: 'bold',
							fontSize: '1rem',
							// border: '1px solid #777',
						};

					return props;
				}}
			/> */}

			<Calendar
				value={value}
				onChange={setValue}
				range
				rangeHover
				numberOfMonths={2}
				calendar={persian}
				locale={persian_fa}
				maxDate={new Date()}
				calendarStyle='w-1/2 bg-white shadow-sm h-auto flex justify-between items-center rounded-md font-thin bg-white p-10 text-center font-iranyekan'
				allDayStyles='w-12 h-12 flex justify-center items-center cursor-pointer text-black'
				todayStyle='text-primary'
				oneDaySelectStyle='text-black bg- rounde '
				rangeDateStyle='bg-sky-200'
				startRangeDayStyle='bg-primary text- rounded-r-md'
				// startRangeDayStyle='rounded-r-md'
				endRangeDayStyle='bg-primary '
				// endRangeDayStyle='rounded-l-md'
				// endRangeDayStyle='bg-primary'
			/>
		</div>
	);
};

export default App;
