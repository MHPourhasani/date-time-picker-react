import { useState } from 'react';

import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import weekends from 'react-multi-date-picker/plugins/highlight_weekends';

// import { DatePicker } from '@julienvanbeveren/react-datetime-picker';

import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// import { Calendar, utils } from 'react-modern-calendar-datepicker';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// import Format from './components/Date Picker/DatePicker';
import Buttons from 'react-multi-date-picker/components/button';
import InputIcon from 'react-multi-date-picker/components/input_icon';
import DatePicker from './components/DatePicker/DatePicker';
import Calendar from './components/Calendar/Calendar';
import Toolbar from './plugins/toolbar/toolbar';

const App = () => {
	const [value, setValue] = useState(new Date());

	const weekDays = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];

	return (
		<div dir='rtl' className='flex w-full flex-col items-center justify-center'>
			<DatePicker
				value={value}
				onChange={setValue}
				weekDays={weekDays}
				calendar={persian}
				locale={persian_fa}
				maxDate={new Date()}
				inputLable='تاریخ'
				calendarStyle='bg-white shadow-2xl h-auto flex flex-col text-sm justify-between items-center rounded-md bg-white p-10 text-center'
				allDayStyles='w-12 h-12 flex justify-center items-center cursor-pointer text-secondary800'
				todayStyle='text-primary'
			/>

			{/* <Calendar
				value={value}
				onChange={setValue}
				weekDays={weekDays}
				calendar={persian}
				locale={persian_fa}
				maxDate={new Date()}
				calendarStyle='w-1/2 bg-white shadow-sm h-auto flex text-sm justify-between items-center rounded-md bg-white p-10 text-center font-iranyekan'
				allDayStyles='w-12 h-12 flex justify-center items-center cursor-pointer text-secondary800'
				todayStyle='text-primary'
				oneDaySelectStyle='text-black bg- rounde '
			/> */}
		</div>
	);
};

export default App;
