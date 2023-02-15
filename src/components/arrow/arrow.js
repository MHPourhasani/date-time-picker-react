import { IoIosArrowForward } from 'react-icons/io';

export default function Arrow({ direction, onClick, disabled }) {
	return (
		<span
			// className={`rmdp-arrow-container flex cursor-pointer items-center justify-center rounded-full hover:text-white ${direction} ${
			// 	disabled ? 'disabled text-disable' : ''
			// }`}

			className={`flex cursor-pointer items-center justify-center rounded-full h-5 w-5 hover:bg-primary ${direction} ${
				disabled ? 'disabled hover:bg-disable' : ''
			}`}
			onClick={onClick}>
			{direction === 'right' ? (
				<IoIosArrowForward className='h-4 w-4 rotate-180' />
			) : (
				<IoIosArrowForward className='h-4 w-4' />
			)}
			{/* <IoIosArrowForward /> */}
			{/* <i className='rmdp-arrow'></i> */}
		</span>
	);
}
