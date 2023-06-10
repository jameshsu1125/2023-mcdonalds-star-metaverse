import { memo, useEffect } from 'react';
import './index.less';

const Box = () => {
	return (
		<div className='box'>
			<div className='image' />
			<div className='name'>
				<div className='capitalize' />
				際超模
			</div>
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
			<div className='body'>
				<p>無法忍受無聊的你</p>
				<p>特別喜歡跟講話有趣的人當朋友</p>
				<p>讓生活充滿「笑死」！</p>
			</div>
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
