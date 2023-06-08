import { memo, useEffect } from 'react';
import './index.less';

const Box = () => {
	return (
		<div className='box'>
			<div className='image' />
			<div className='name'>星際超模</div>
			<div className='productName'>
				<div>OREO冰炫風</div>
			</div>
		</div>
	);
};

const Message = () => {
	return (
		<div className='message'>
			<div className='title' />
		</div>
	);
};

const Buddy = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Buddy'>
			<Box />
			<Box />
			<Message />
		</div>
	);
});
export default Buddy;
